export interface Project {
	name: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
	// url: string;
	// category: 'web development' | 'web design' | 'mobile design' | 'python' | 'rust';
	// skills: string[];
}

const projects: Project[] = [
	{
		name: 'Project 1',
		image: { src: 'src/lib/images/projects/testImg.jpg', alt: 'project alt' },
		description: 'This is a project that I have worked on.'
	},
	{
		name: 'Project 2',
		image: { src: 'src/lib/images/projects/testImg.jpg', alt: 'project alt' },
		description: 'This is a project that I have worked on.'
	},
	{
		name: 'Project 3',
		image: { src: 'src/lib/images/projects/testImg.jpg', alt: 'project alt' },
		description: 'This is a project that I have worked on.'
	},
	{
		name: 'Project 4',
		image: { src: 'src/lib/images/projects/testImg.jpg', alt: 'project alt' },
		description: 'This is a project that I have worked on.'
	}
];

export default projects;
