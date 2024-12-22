export interface Experience {
	company: string;
	position: string;
	// start: string;
	// end: string;
	description: string;
}

const experience: Experience[] = [
	{
		company: 'Company 1',
		position: 'Position 1',
		description:
			'Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus ultricies malesuada rutrum rutrum maximus. Fames commodo nulla ex volutpat porttitor. Quisque auctor purus bibendum molestie gravida. Adipiscing nisl imperdiet dui; condimentum velit eleifend phasellus nulla. Ultrices placerat scelerisque tempor consectetur id sodales accumsan euismod. Nisl sit quam facilisi; bibendum adipiscing etiam. Mollis feugiat aliquet pellentesque nisl commodo ut odio mattis.'
	},
	{
		company: 'Company 2',
		position: 'Position 2',
		description: 'This is a description of my experience.'
	},
	{
		company: 'Company 3',
		position: 'Position 3',
		description: 'This is a description of my experience.'
	},
	{
		company: 'Company 4',
		position: 'Position 4',
		description: 'This is a description of my experience.'
	}
];

export default experience;
