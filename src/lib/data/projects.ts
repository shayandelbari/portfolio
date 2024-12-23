export interface Project {
	name: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
	isFirstPage?: boolean;
	shortDescription: string;
	// url: string;
	// category: 'web development' | 'web design' | 'mobile design' | 'python' | 'rust'; // this is determining how to render the page
	// skills: string[];
}

const projects: Project[] = [
	{
		isFirstPage: true,
		name: 'Project 1',
		image: { src: 'src/lib/images/projects/testImg.jpg', alt: 'project alt' },
		description: 'This is a project that I have worked on.',
		shortDescription: 'This is a small description'
	},
	{
		isFirstPage: true,
		name: 'Project 2',
		image: { src: 'src/lib/images/projects/testImg.jpg', alt: 'project alt' },
		description: 'This is a project that I have worked on.',
		shortDescription: 'This is a small description'
	},
	{
		isFirstPage: true,
		name: 'Project 3',
		image: { src: 'src/lib/images/projects/testImg.jpg', alt: 'project alt' },
		description: 'This is a project that I have worked on.',
		shortDescription: 'This is a small description'
	},
	{
		name: 'Project 4',
		image: { src: 'src/lib/images/projects/testImg.jpg', alt: 'project alt' },
		description: 'This is a project that I have worked on.',
		shortDescription: 'This is a small description'
	}
];

export default projects;
