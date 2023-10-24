/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			slate: colors.slate,
			stone: colors.stone,
			blue: colors.blue,
			green: colors.green,
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			scissors1: 'hsl(var(--scissors-1))',
			scissors2: 'hsl(var(--scissors-2))',
			rock1: 'hsl(var(--rock-1))',
			rock2: 'hsl(var(--rock-2))',
			paper1: 'hsl(var(--paper-1))',
			paper2: 'hsl(var(--paper-2))',
			darkText: 'hsl(var(--dark-text))',
			scoreText: 'hsl(var(--score-text))',
			headerOutline: 'hsl(var(--header-outline)/<alpha-value>)'
		},

		extend: {

		},
	},
	plugins: [],
}
