module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      "xs": ".75rem",
      "sm": ".875rem",
      "tiny": "17px",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        navColor: {
          50: "#efeffd",
          100: "#d0d3e4",
          200: "#b2b5cd",
          300: "#9397b8",
          400: "#757aa3",
          500: "#5b6089",
          600: "#464b6b",
          700: "#32354d",
          750: "#2B3148",
          800: "#1d2030",
          900: "#070b16",
        },
        premierColor: {
          100: "#2B3148",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
