import testImage from '$lib/images/projects/testImg.jpg';
import NikeLanding from '$lib/images/projects/NikeLanding.png';
import NikeLandingThumbnail from '$lib/images/projects/NikeLanding-thumbnail.png';
import NikeLandingDescription from '$lib/data/description/projects/NikeLanding.html?raw';

export interface Project {
	name: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
	thumbnail: {
		src: string;
		alt: string;
	};
	isFirstPage?: boolean;
	shortDescription: string;
	// url: string;
	// category: 'web development' | 'web design' | 'mobile design' | 'python' | 'rust'; // this is determining how to render the page
	skills: string[];
}

const projects: Project[] = [
	{
		isFirstPage: true,
		name: 'Landing Page - Nike',
		image: { src: NikeLanding, alt: 'Nike Landing Page academy mockup of the first page' },
		thumbnail: { src: NikeLandingThumbnail, alt: 'Nike Landing Page academy thumbnail' },
		description: NikeLandingDescription,
		shortDescription: 'A responsive landing page using React, Tailwind CSS, and JavaScript.',
		skills: ['React', 'TailwindCSS', 'JavaScript']
	},
	{
		isFirstPage: true,
		name: 'Project 2',
		image: { src: testImage, alt: 'project alt' },
		thumbnail: { src: testImage, alt: 'project alt' },
		description: 'This is a project that I have worked on.',
		shortDescription: 'This is a small description',
		skills: ['python', 'rust']
	},
	{
		isFirstPage: true,
		name: 'Project 3',
		image: { src: testImage, alt: 'project alt' },
		thumbnail: { src: testImage, alt: 'project alt' },
		description: 'This is a project that I have worked on.',
		shortDescription: 'This is a small description',
		skills: ['python', 'rust']
	},
	{
		name: 'Project 4',
		image: { src: testImage, alt: 'project alt' },
		thumbnail: { src: testImage, alt: 'project alt' },
		description: 'This is a project that I have worked on.',
		shortDescription: 'This is a small description',
		skills: ['python', 'rust']
	}
];

export default projects;
