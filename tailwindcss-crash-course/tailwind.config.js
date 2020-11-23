const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ["./index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      transform: ["hover", "focus", "active"],
      translate: ["active", "hover", "focus"],
      ringWidth: ["focus-visible"],
    },
  },
  plugins: [],
};
