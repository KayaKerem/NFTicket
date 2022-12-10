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
        a: "linear-gradient(90deg, rgba(151,122,225,1) 0%, rgba(181,115,199,1) 49%, rgba(255,102,196,1) 100%);",
      },
    },
  },
  plugins: [],
};
