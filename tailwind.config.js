/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        mypulse: {
          '0%, 100%': { opacity: '60%' },
          '50%': { opacity: '40%' },
        }
      },
      animation: {
        mypulse: 'mypulse 2.5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

