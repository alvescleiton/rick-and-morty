/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        introAnimation: {
          '0%': { filter: 'hue-rotate(0deg)', opacity: 1 },
          '50%': { filter: 'hue-rotate(180deg)', opacity: 1 },
          '75%': { filter: 'hue-rotate(90deg)', opacity: 1 },
          '90%': { filter: 'hue-rotate(45deg)', opacity: 0 },
          '100%': { filter: 'hue-rotate(0deg)', opacity: 0 },
        }
      },
      animation: {
        introAnimation: 'introAnimation 5s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}

