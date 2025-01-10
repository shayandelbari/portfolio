import testImage from '$lib/images/projects/testImg.jpg';
import InvestSmart from '$lib/images/projects/InvestSmart.png';
import InvestSmartThumbnail from '$lib/images/projects/InvestSmart-thumbnail.png';
import InvestSmartDescription from '$lib/data/description/InvestSmart.html?raw';

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
		name: 'InvestSmart Academy',
		image: { src: InvestSmart, alt: 'Invest Smart academy mockup of the first page' },
		thumbnail: { src: InvestSmartThumbnail, alt: 'Invest Smart academy thumbnail' },
		description: InvestSmartDescription,
		shortDescription: 'This is a small description',
		skills: ['python', 'rust']
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
