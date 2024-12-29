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
	skills: string[];
}

const projects: Project[] = [
	{
		isFirstPage: true,
		name: 'Project 1',
		image: { src: 'src/lib/images/projects/testImg.jpg', alt: 'project alt' },
		description:
			'Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus ultricies malesuada rutrum rutrum maximus. Fames commodo nulla ex volutpat porttitor. Quisque auctor purus bibendum molestie gravida. Adipiscing nisl imperdiet dui; condimentum velit eleifend phasellus nulla. Ultrices placerat scelerisque tempor consectetur id sodales accumsan euismod. Nisl sit quam facilisi; bibendum adipiscing etiam. Mollis feugiat aliquet pellentesque nisl commodo ut odio mattis.',
		shortDescription: 'This is a small description',
		skills: ['python', 'rust']
	},
	{
		isFirstPage: true,
		name: 'Project 2',
		image: { src: 'src/lib/images/projects/testImg.jpg', alt: 'project alt' },
		description: 'This is a project that I have worked on.',
		shortDescription: 'This is a small description',
		skills: ['python', 'rust']
	},
	{
		isFirstPage: true,
		name: 'Project 3',
		image: { src: 'src/lib/images/projects/testImg.jpg', alt: 'project alt' },
		description: 'This is a project that I have worked on.',
		shortDescription: 'This is a small description',
		skills: ['python', 'rust']
	},
	{
		name: 'Project 4',
		image: { src: 'src/lib/images/projects/testImg.jpg', alt: 'project alt' },
		description: 'This is a project that I have worked on.',
		shortDescription: 'This is a small description',
		skills: ['python', 'rust']
	}
];

export default projects;
