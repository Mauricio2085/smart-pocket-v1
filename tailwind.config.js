/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				DynaPuff: ["DynaPuff"],
			},
			screens: {
				"0.5xl": "1400px",
				"3xl": "1650px",
			},
		},
	},
	plugins: [],
};
