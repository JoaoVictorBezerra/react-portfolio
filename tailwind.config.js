/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        content: "700px",
      },
      letterSpacing: {
        label: "0.15em",
      },
      fontFamily: {
        bodyFont: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        'navbar-shadow': "0 10px 30px -10px rgba(0, 1, 1, 0.3)",
      },
      colors: {
        background: "#181818",
        "background-opacity": "#6528F74D",
        primary: "#6528F7",
        "text-primary": "#F5F5F5",
        "text-secondary": "#808080",
      },
    },
  },
  plugins: [],
};
