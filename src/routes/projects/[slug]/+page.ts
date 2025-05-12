import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { projects } from '$lib/data';

export const load: PageLoad = ({ params }) => {
	// Extract the slug from the URL
	const { slug } = params;

	// Find the project matching the slug
	const project = projects.find((p) => p.name.toLowerCase().replace(/\s+/g, '-') === slug);

	if (!project) {
		throw error(404, `Project with slug "${slug}" not found.`);
	}

	// Return the project data
	return {
		project
	};
};
