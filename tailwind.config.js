/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "black": {
        DEFAULT: "#000112d6"
      },
      "gray": {
        light: "#f3f1f5"
      },
      purple: {
        DEFAULT: '#5a47cc'
      },
      'white': {
        DEFAULT: "#ffff"
      }
    }
  },
  plugins: [],
}