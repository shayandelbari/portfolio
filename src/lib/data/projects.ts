import projectsData from './projects.json';

export interface Project {
	name: string;
	shortDescription: string;
	slug: string;
	description: string;
	thumbnail?: {
		src: string;
		alt: string;
	};
	firstPage: boolean;
	url: string;
	website?: string;
	skills: string[];
	commitSha: string;
}

const projectDescriptions = import.meta.glob('/src/lib/data/description/projects/*.html', {
	as: 'raw',
	eager: true
});

// Create a mapping of slugs to descriptions
const descriptions: Record<string, string> = {};
Object.entries(projectDescriptions).forEach(([path, content]) => {
	// Extract the slug from the path (filename without extension)
	const slug = path.split('/').pop()?.replace('.html', '');
	if (slug) {
		descriptions[slug] = content;
	}
});

// Combine project data with descriptions
const projects: Project[] = projectsData.map((project) => ({
	...project,
	// Use the loaded description or fallback to empty string
	description: descriptions[project.slug] || ''
}));

export default projects;
