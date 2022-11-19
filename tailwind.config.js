/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "black": {
        light: "#08003c87",
        DEFAULT: "#000112d6"
      },
      "gray": {
        light: "#f3f1f5",
        DEFAULT: "#f9f8fa"
      },
      purple: {
        DEFAULT: '#5a47cc'
      },
      'white': {
        DEFAULT: "#ffff"
      },
      'border': {
        DEFAULT: '#26004c1c'
      }
    }
  },
  plugins: [],
}