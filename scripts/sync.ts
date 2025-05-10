import 'dotenv/config';
import { existsSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import { Octokit } from 'octokit';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import rehypeFormat from 'rehype-format';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import type { Project } from '../src/lib/data/projects';

/**
 * Configuration module for the sync script
 */
class Config {
	// GitHub Configuration
	readonly githubUsername: string;
	readonly portfolioTopic: string;
	readonly githubAccessToken: string;

	// File paths
	readonly descriptionDir: string;
	readonly projectsJsonPath: string;
	readonly imagesDir: string;

	// First page projects
	readonly firstPage: string[];

	constructor() {
		// GitHub Configuration
		this.githubUsername = process.env.GITHUB_USERNAME || 'shayandelbari';
		this.portfolioTopic = process.env.PORTFOLIO_TOPIC || 'portfolio';
		this.githubAccessToken = process.env.GITHUB_ACCESS_TOKEN || '';

		// Validate required configuration
		if (!this.githubAccessToken) {
			throw new Error('Missing GITHUB_ACCESS_TOKEN in .env file');
		}
		// File paths - resolved relative to script location
		this.descriptionDir = join(
			dirname(fileURLToPath(import.meta.url)),
			'../src/lib/data/description/projects'
		);
		this.projectsJsonPath = join(
			dirname(fileURLToPath(import.meta.url)),
			'../src/lib/data/projects.json'
		);
		this.imagesDir = join(dirname(fileURLToPath(import.meta.url)), '../src/lib/images/projects');

		// First page projects
		this.firstPage = ['vehicle-management-system'];
	}
}

// Simple logger with colored output
const logger = {
	info: (message: string) => console.log(`\x1b[36m[INFO]\x1b[0m ${message}`),
	success: (message: string) => console.log(`\x1b[32m[SUCCESS]\x1b[0m ${message}`),
	error: (message: string, error?: unknown) => {
		console.error(`\x1b[31m[ERROR]\x1b[0m ${message}`);
		if (error) console.error(error);
	},
	step: (step: number, message: string) => console.log(`\x1b[35m[STEP ${step}]\x1b[0m ${message}`),
	warn: (message: string) => console.log(`\x1b[33m[WARN]\x1b[0m ${message}`),
	skip: (message: string) => console.log(`\x1b[90m[SKIP]\x1b[0m ${message}`)
};

const config = new Config();
const octokit = new Octokit({ auth: config.githubAccessToken });

type ProjectScript = Omit<Project, 'description'>;

/**
 * turning markdown to html with syntax highlighting and formatting
 */
async function markdownToHtml(markdown: string) {
	const html = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeHighlight)
		.use(rehypeFormat)
		.use(rehypeStringify)
		.process(markdown);

	const result =
		'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.0/styles/github-dark.min.css">' +
		html.toString();

	return result;
}

/**
 * Converts a kebab-case string to Title Case.
 */
function toTitleCase(kebabCase: string) {
	return kebabCase
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

/**
 * @returns {Promise<Project[]>} - An array of projects
 */
async function readGithubProjects(): Promise<ProjectScript[]> {
	const { data } = await octokit.rest.repos.listForUser({
		username: config.githubUsername,
		per_page: 100,
		sort: 'updated',
		direction: 'desc'
	});

	const repos = data.filter((data) => data.topics?.includes(config.portfolioTopic));
	logger.info(`Found ${repos.length} repositories`);

	const projects: ProjectScript[] = [];

	// Process each repository to get README commit SHA
	for (const repo of repos) {
		// Get the latest commit SHA for the README.md
		const readmeCommits = await octokit.rest.repos
			.listCommits({
				owner: config.githubUsername,
				repo: repo.name,
				path: 'README.md',
				per_page: 1
			})
			.catch(() => ({ data: [{ sha: '' }] }));

		const commitSha = readmeCommits.data[0].sha;

		logger.info(`Fetching README SHA for ${repo.name}`);

		projects.push({
			name: toTitleCase(repo.name),
			shortDescription: repo.description || 'A Github Project',
			slug: repo.name,
			firstPage: config.firstPage.includes(repo.name),
			url: repo.html_url,
			website: repo.homepage || undefined,
			skills: repo.topics?.filter((topic) => topic !== config.portfolioTopic) || [],
			commitSha
		});
	}

	return projects;
}

/**
 * Downloads the README.md file from a repository, converts it to HTML,
 * and saves it to the description directory.
 *
 * @param repoName The name of the repository
 * @returns Promise that resolves when the file has been saved, or rejects with an error
 */
async function downloadAndSaveReadme(repoName: string) {
	logger.info(`Processing README for ${repoName}`);

	try {
		// Get the README.md content from GitHub
		const { data } = await octokit.rest.repos.getContent({
			owner: config.githubUsername,
			repo: repoName,
			path: 'README.md'
		});

		// Validate response format
		if (!('content' in data) || !('encoding' in data)) {
			throw new Error('Invalid GitHub API response format');
		}
		const fileData = data as { content: string; encoding: string };

		// Decode content and convert to HTML in a single flow
		if (fileData.encoding !== 'base64') {
			throw new Error(`Unsupported encoding: ${fileData.encoding}`);
		}
		const markdown = Buffer.from(fileData.content, 'base64').toString('utf-8');
		const html = await markdownToHtml(markdown);

		// Create output path and write file
		const outputPath = join(config.descriptionDir, `${repoName}.html`);
		await writeFile(outputPath, html, 'utf-8');

		logger.success(`Saved HTML description for ${repoName}`);
		return outputPath;
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : 'Unknown error';
		logger.error(`Failed to process README for ${repoName}: ${errorMessage}`);
	}
}

/**
 * Reads the projects.json file and returns the parsed array of projects
 * Creates an empty array if the file doesn't exist or can't be parsed
 *
 * @returns {Promise<Project[]>} The array of projects from the JSON file
 */
async function readLocalProjects(): Promise<ProjectScript[]> {
	try {
		if (!existsSync(config.projectsJsonPath)) {
			logger.warn(`Projects file not found at ${config.projectsJsonPath}, returning empty array`);
			return [];
		}

		// Read and parse the file
		const fileContent = await readFile(config.projectsJsonPath, 'utf-8');
		const projects = JSON.parse(fileContent) as ProjectScript[];

		logger.info(`Loaded ${projects.length} projects from ${config.projectsJsonPath}`);
		return projects;
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : 'Unknown error';
		logger.error(`Failed to read projects file: ${errorMessage}`);

		// Return empty array on error to allow program to continue
		return [];
	}
}

/**
 * Update or create a project based on GitHub data
 * @param githubProject The project data from GitHub
 * @param existingProject The existing project data (if any)
 * @returns The updated project
 */
function processProject(
	githubProject: ProjectScript,
	existingProject: ProjectScript | undefined,
	forceUpdate = false
): { project: ProjectScript; needsReadmeUpdate: boolean } {
	// New project case
	if (!existingProject) {
		logger.info(`New project found: ${githubProject.name}`);
		return { project: githubProject, needsReadmeUpdate: true };
	}

	// Check if README needs updating
	const readmeChanged = 
		forceUpdate || 
		!existingProject.commitSha || 
		existingProject.commitSha !== githubProject.commitSha;

	if (readmeChanged) {
		// Project exists but README has been updated
		logger.info(
			`Project README updated: ${githubProject.name} (new commit: ${githubProject.commitSha.substring(0, 7)})`
		);

		return {
			project: {
				...existingProject,
				...githubProject,
				// Preserve any custom fields from existing project that shouldn't be overwritten
				firstPage: existingProject.firstPage || githubProject.firstPage
			},
			needsReadmeUpdate: true
		};
	}

	// No changes needed
	logger.skip(`No changes for project: ${githubProject.name}`);
	return { project: existingProject, needsReadmeUpdate: false };
}

/**
 * Main function to synchronize projects from GitHub to local project files
 * @param forceUpdate If true, updates all projects regardless of their commit SHA
 */
async function syncProjects(forceUpdate = false) {
	try {
		if (forceUpdate) {
			logger.info('Force update mode: will update all projects regardless of commit SHA');
		}
		
		// Step 1: Load existing data
		logger.step(1, 'Loading existing projects from disk');
		const existingProjects = await readLocalProjects();
		const existingProjectMap = new Map(existingProjects.map((project) => [project.slug, project]));

		// Step 2: Fetch GitHub data
		logger.step(2, 'Fetching updated projects from GitHub');
		const githubProjects = await readGithubProjects();

		// Step 3: Identify changes and update projects
		logger.step(3, 'Synchronizing projects');
		const updatedProjects: ProjectScript[] = [];
		const projectsToUpdate: string[] = [];
		// Process each GitHub project
		for (const githubProject of githubProjects) {
			const existingProject = existingProjectMap.get(githubProject.slug);
			const { project, needsReadmeUpdate } = processProject(githubProject, existingProject, forceUpdate);

			updatedProjects.push(project);

			if (needsReadmeUpdate) {
				projectsToUpdate.push(githubProject.slug);
			}
		}

		// Step 4: Update README files
		if (projectsToUpdate.length > 0) {
			logger.step(4, 'Downloading updated README files');

			// Process updates in parallel with controlled concurrency
			await Promise.all(
				projectsToUpdate.map(async (slug) => {
					try {
						await downloadAndSaveReadme(slug);
					} catch (error) {
						logger.warn(`Could not download README for ${slug}, continuing with next project`);
					}
				})
			);
		}

		// Step 5: Save updated projects
		logger.step(5, 'Saving updated projects.json');
		await writeFile(config.projectsJsonPath, JSON.stringify(updatedProjects, null, 2), 'utf-8');

		// Final report
		if (projectsToUpdate.length > 0) {
			logger.success(`Updated ${projectsToUpdate.length} projects`);
		} else {
			logger.success('All projects are already up to date');
		}

		return updatedProjects;
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : 'Unknown error';
		logger.error(`Synchronization failed: ${errorMessage}`, error);
		throw error; // Re-throw to be handled by the caller
	}
}

// Check if --force flag is passed
const forceUpdate = process.argv.includes('--force') || process.argv.includes('-f');

syncProjects(forceUpdate).catch((error) => {
	logger.error('Fatal error during synchronization', error);
	process.exit(1);
});
