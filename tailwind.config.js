/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'DynaPuff': ['DynaPuff']
      },
      backgroundImage: {
        'jumbo': "url('../assets/Jumbo.JPEG')",
      }
    },
  },
  plugins: [],
}

