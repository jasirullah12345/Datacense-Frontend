/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'primary': '#101A32',
            'secondary': '#3E8ACC'
        }
    },
  },
  plugins: [],
}
