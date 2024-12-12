import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				white: '#fafafa',
				black: '#121212', // couldn't find a better way :(
				gray: { 900: '#1f1f1f' },
				primary: '#16a34a'
			}
		}
	},

	plugins: []
} satisfies Config;
