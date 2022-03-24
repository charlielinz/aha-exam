const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        home: "#181818",
        light: "#1B1B1B",
        default: "#121212",
        tutor: "#FF9B33",
      },
    },
    fontFamily: {
      ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
