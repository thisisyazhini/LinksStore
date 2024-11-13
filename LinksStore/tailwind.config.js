/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        droidSans : ['"droid-sans"', "sans-serif"],
        // Add more custom font families as needed
      },
      colors: {
        'hot-pink': '#FF4364',
        'light-gray':'#f3f3f4'
      }
    },
  },
  plugins: [],
}

