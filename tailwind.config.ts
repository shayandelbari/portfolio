import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		colors: {
			white: '#fafafa',
			black: '#121212',
			gray: {
				100: '#d1d5db',
				900: '#1f1f1f'
			},
			primary: '#16a34a',
			text: {
				secondary: '#6b7280'
			}
		}
	},

	plugins: [typography]
} satisfies Config;
