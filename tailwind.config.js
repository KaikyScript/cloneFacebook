/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue-facebook': '#1877f2',
        'fundo-facebook': '#f0f2f5',
        'green-facebook': '#42b72a',
      },
      spacing: {
        '580': '500px',
        '380': '380px',
      }
    },
  },
  plugins: [],
}
