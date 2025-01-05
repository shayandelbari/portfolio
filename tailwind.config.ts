import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import { DEFAULT } from '@tailwindcss/typography/src/styles'

// Remove all color from the typography plugin.
const noColor = (obj: any): any => {
	if (Array.isArray(obj)) {
		return obj.map(noColor)
	}
	return Object.fromEntries(
		Object.entries(obj)
			.filter(
				([k, v]) =>
					v instanceof Object ||
					k === 'color' || // Disable colours.
					k.startsWith('--tw-prose-') || // Disable variables.
					(typeof v === 'string' && v.includes('--tw-prose-')) // Disable props using variables.
			)
			.map(([k, v]) => {
				if (v instanceof Object) {
					return [k, noColor(v)]
				}
				return [k, null]
			})
	);
};

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			typography: {
				DEFAULT: noColor(DEFAULT)
			},
			colors: {
				white: '#fafafa',
				black: '#121212', // couldn't find a better way :(
				gray: { 900: '#1f1f1f' },
				primary: '#16a34a'
			},
			backgroundImage: {
				noise: "url('src/lib/images/noise.svg')"
			}
		}
	},

	plugins: [typography]
} satisfies Config;
