/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      // Primary

      'cyan': 'hsl(180, 66%, 49%)',
      'dark-violet': 'hsl(257, 27%, 26%)',
      'white': 'hsl(0, 100%, 100%)',

      // Secondary

      'red': 'hsl(0, 87%, 67%)',

      // Neutral

      'gray': 'hsl(0, 0%, 75%)',
      'grayish-violet': 'hsl(257, 7%, 63%)',
      'very-dark-blue': 'hsl(255, 11%, 22%)',
      'very-dark-violet': 'hsl(260, 8%, 14%)'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'shorten-mobile': 'url("./images/bg-shorten-mobile.svg")',
        'boost-mobile': 'url("./images/bg-boost-mobile.svg")'
      }
    }
  },
  plugins: []
}
