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
        'biru-light': '#409CEA',
        'black': '#000',
        'red': '#DE2323'
      },
    },
  },
  plugins: [],
}
