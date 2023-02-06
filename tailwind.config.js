/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        '135': '135deg',
      },
      maxWidth: {
        '100': '100px',
      }
    },
  },
  plugins: [],
}
