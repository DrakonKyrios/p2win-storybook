// eslint-disable-next-line no-undef
module.exports = {
  content: ["./**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        white: "#ffffff",
        primary: {
          100: "#2F96D6",
          200: "#2881B8",
          300: "#216996",
          400: "#1D5D85",
          500: "#154360",
          600: "#123952",
          700: "#0E2D40",
          800: "#0D2B3D",
          900: "#0B2230",
        },
        secondary: {
          100: "#FAAF40",
          200: "#FAAF40",
          300: "#FAAF40",
          400: "#FAAF40",
          500: "#FAAF40",
          600: "#FAAF40",
          700: "#FAAF40",
          800: "#FAAF40",
          900: "#FAAF40",
        },
        gold: "#faaf40",
      },
    },
  },
  plugins: [],
};
