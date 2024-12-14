/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkRed: '#5d002c',
          pink: '#f078b1',
          purple: '#d7b7ff',
          lime: '#b7ffc3',
          light: '#fcebdb'
        }
      }
    },
  },
  plugins: [],
}