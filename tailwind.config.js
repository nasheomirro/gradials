const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			primary: colors.amber,
			surface: colors.slate,
      black: colors.black,
      error: colors.rose,
		},
		fontFamily: {
			sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
		},
		extend: {}
	},
	plugins: []
};
