/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#4379F2',
        'blue': "#409CEA",
        'blue-light' : "#C2E2F8",
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
