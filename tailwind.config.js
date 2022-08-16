/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'paragraph': [' "Barlow Condensed" ', 'sans-serif'],
      'Heading': ['Bellefair', 'serif']
    },
    extend: {
      backgroundImage: {
        'home-desktop': "url(/src/assets/home/background-home-desktop.jpg)",
        'home-mobile': "url(/src/assets/home/background-home-mobile.jpg)",
        'home-tablet': "url(/src/assets/home/background-home-tablet.jpg)",
      },
      backgroundColor: {
        'custom-blur': "rgba(255, 255, 255, 0.04)"
      },
      colors: {
        'color-1': '#0B0D17',
        'color-2': '#D0D6F9',
        'color-3': '#FFFFFF'
      }
      
    },
  },
  plugins: [],
}
