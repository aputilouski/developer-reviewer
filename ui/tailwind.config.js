const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')],
};
