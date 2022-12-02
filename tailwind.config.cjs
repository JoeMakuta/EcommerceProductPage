/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Darker Grotesque'],
      'paragraph': ['Manrope']
    },
    extend: {},
    colors: {
      'white': '#ffffff',
      'main_color': '#001906',
      'gray' : '#BDBDBD'
    },
  },
  plugins: [],
}
