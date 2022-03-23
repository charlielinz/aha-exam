const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        home: "#181818",
        sidebar: "#1B1B1B",
      },
    },
    fontFamily: {
      ubuntu: ["Ubuntu", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
