export interface Skill {
	name: string;
	category: 'language' | 'framework' | 'tool' | 'design';
}

const skills: Skill[] = [
	{ name: 'Python', category: 'language' },
	{ name: 'Rust', category: 'language' },
	{ name: 'C#', category: 'language' },
	{ name: 'JavaScript', category: 'language' },
	{ name: 'SQL', category: 'language' },
	{ name: 'Svelte', category: 'framework' },
	{ name: 'React.js', category: 'framework' },
	{ name: 'Next.js', category: 'framework' },
	{ name: 'Tailwind CSS', category: 'framework' },
	{ name: 'Docker', category: 'tool' },
	{ name: 'Git', category: 'tool' },
	{ name: 'WordPress', category: 'tool' },
	{ name: 'Linux (Ubuntu, Fedora)', category: 'tool' }
	// { name: 'Photoshop', category: 'design' },
	// { name: 'Illustrator', category: 'design' },
	// { name: 'Clo3D', category: 'design' },
	// { name: 'Marvelous Designer', category: 'design' },
	// { name: 'Figma', category: 'design' }
];

export default skills;
