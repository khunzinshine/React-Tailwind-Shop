const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        red: colors.rose,
        sky: colors.sky,
        cyan: colors.cyan
      }
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      transform: ['group-hover']
    },
  },
  plugins: [],
};
