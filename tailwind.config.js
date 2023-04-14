/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        hero: '10px 40px 50px rgba(229, 233, 246, 0.7)',
        box: '10px 40px 50px rgba(229, 233, 246, 0.4)',
        'box-xs': '0 0 10px 0 rgba(229, 233, 246, 1)',
        'box-lg': '10px 10px 10px rgba(229, 233, 246, 1)',
      },
      colors: {
        'accent-color': 'rgba(69, 143, 246, 1)',
        'accent-light': 'rgb(158, 196, 250, 1)',
        'accent-hover': 'rgba(21, 114, 244, 1)',
        'main-text-color/70': 'rgba(31, 21, 52, .7)',
        'main-text-color/100': 'rgba(31, 21, 52, 1)',
        'secondary-text-color': 'rgba(125, 121, 135, 1)',
        'logo': 'rgba(35, 51, 72, 1)',
        'bgBlack': 'rgba(0, 0, 0, 0.7)'
      },
      lineHeight: {
        'heading': '1.2',
      },
      borderRadius: {
        'box': '20px',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)',
        'hero': 'url("./src/img/hero.png")',
        'transition-top': 'linear-gradient(to top, transparent, #fff)',
        'transition-bot': 'linear-gradient(to bottom, transparent, #fff)',
        'blueShape': 'url("./src/img/blue-shape.svg")',
        'blueShape2': 'url("./src/img/blue-shape2.svg")',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'xs': '2rem',
      },
    },
    screens: {
      'xs': '500px',
      'xxs': {'max': '350px'},
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
