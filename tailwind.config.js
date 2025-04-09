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
          light: '#fcebdb',
          cream: '#fcebdb'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        greatVibes: ['var(--font-great-vibes)', 'cursive']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}