/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				DynaPuff: ["DynaPuff"],
			},
			screens: {
				"0.5xl": "1400px",
				"3xl": "1650px",
			},
			backgroundImage: {
				jumbo: "url('../assets/Smart_Pocket_V2_Fondo_pantalla_1367x770px.png')",
			},
		},
	},
	plugins: [],
};
