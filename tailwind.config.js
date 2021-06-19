module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      bg: "#000000 ",
      primary: "#FFFFFF",
      secondary: {
        100: "#c4d600",
        200: "#43b02a",
        300: "#046a38",
        400: "#2c5234",
        500: "#86bc25",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      // ...
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
