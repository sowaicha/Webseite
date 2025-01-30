/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],


	theme: {
		extend: {
			boxShadow: {
				'custom': '0 4px 10px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
			},
			boxShadow: {
				'hallo': '0 px 6px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.06)',
			},
		},
	},
}


