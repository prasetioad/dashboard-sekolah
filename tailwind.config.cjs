/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'biru-dark': '#314F84',
        'biru': "#409CEA",
        'biru-light' : "#C2E2F8",
        'black': '#000',
        'red': '#DE2323',
        'grey': '#767C85',
        'grey-white': '#F6F8F9',
        'pink' :"#F8C2E6"
      },
    },
  },
  safelist: [
    'odd:bg-gray-100',
    'even:bg-white'
  ],
  variants : {
    // backgroundColor: ['odd', 'even'],
  },
  plugins: [],
}
