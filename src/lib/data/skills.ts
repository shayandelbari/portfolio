export interface Skill {
	name: string;
	category: 'language' | 'framework' | 'tool' | 'design';
}

const skills: Skill[] = [
	{ name: 'Python', category: 'language' },
	{ name: 'TypeScript', category: 'language' },
	{ name: 'Rust', category: 'language' },
	{ name: 'C#', category: 'language' },
	{ name: 'JavaScript', category: 'language' },
	{ name: 'Java', category: 'language' },
	{ name: 'SQL', category: 'language' },
	{ name: 'Svelte', category: 'framework' },
	{ name: 'SvelteKit', category: 'framework' },
	{ name: 'React.js', category: 'framework' },
	{ name: 'Next.js', category: 'framework' },
	{ name: 'Tailwind CSS', category: 'framework' },
	{ name: 'REST APIs', category: 'framework' },
	{ name: 'MongoDB', category: 'tool' },
	{ name: 'Mongoose', category: 'tool' },
	{ name: 'PostgreSQL', category: 'tool' },
	{ name: 'SQLite', category: 'tool' },
	{ name: 'Clerk', category: 'tool' },
	{ name: 'Docker', category: 'tool' },
	{ name: 'Git', category: 'tool' },
	{ name: 'Vercel', category: 'tool' },
	{ name: 'WordPress', category: 'tool' },
	{ name: 'Linux (Ubuntu, Fedora)', category: 'tool' },
	{ name: 'BeautifulSoup', category: 'tool' },
	{ name: 'scikit-learn', category: 'tool' },
	{ name: 'LLM/API Integration', category: 'tool' },
	{ name: 'Data Processing', category: 'tool' },
	{ name: 'Figma', category: 'design' },
	{ name: 'Photoshop', category: 'design' },
	{ name: 'Illustrator', category: 'design' },
	{ name: 'Blender', category: 'design' },
	{ name: 'CLO3D', category: 'design' },
	{ name: 'Marvelous Designer', category: 'design' }
];

export default skills;
