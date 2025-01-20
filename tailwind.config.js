/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				DynaPuff: ["DynaPuff"],
			},
			backgroundImage: {
				jumbo: "url('../assets/Smart_Pocket_V2_Fondo_pantalla_1367x770px.png')",
			},
		},
	},
	plugins: [],
};
