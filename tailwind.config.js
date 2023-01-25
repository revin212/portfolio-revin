/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-black': '#06050b',
        'main-dark-blue': '#1d0664',
        'main-strong-blue': '#3405cb',
        'neutral-dark-gray': '#282828',
        'neutral-light-blue': '#bee1ff',
        'neutral-white': '#ffffff',
      },

      fontFamily: {
        'main-poppins': ['Poppins', 'sans-serif'],
      }
    },

      backgroundImage: {
        'gradient-black': "url('../images/blurry-gradient-haikei-black.svg')",
        'gradient-blue': "url('../images/blurry-gradient-haikei-blue.svg')",
      }
  },
  plugins: [],
}
