/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontSize: {
				'7xl': '5rem',
			},
			height: {
				'4xl': '50rem',
			},
		},
	},
	plugins: [],
};
