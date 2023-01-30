/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./lib/Components/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      neutral: colors.neutral,
      purple: colors.purple,
      rose: colors.rose
    },
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans]
    }
  }
}