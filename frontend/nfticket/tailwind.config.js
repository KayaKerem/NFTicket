/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "primary-gray": "#7A797D",
      "primary-purple": "#957AE1",
      ...colors,
    },
    extend: {
      backgroundImage: {
        a: "linear-gradient(231.15deg, #FF6961 3.08%, #E186A7 31.35%, #A7C7E7 100%);",
      },
    },
  },
  plugins: [],
};
