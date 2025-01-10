import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			typography: {},
			colors: {
				white: '#fafafa',
				black: '#121212', // couldn't find a better way :(
				gray: { 900: '#1f1f1f' },
				primary: '#16a34a'
			},
			backgroundImage: {
				noise: 'url("src/lib/images/noise.svg")'
			}
		}
	},

	plugins: [typography]
} satisfies Config;
