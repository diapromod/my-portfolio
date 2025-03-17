/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#ff5733",
          secondary: "#1a1a2e",
        },
        fontFamily: {
          sans: ["Plus Jakarta Sans", "sans-serif"],
        },
      },
    },
    darkMode: "class",
    plugins: [],
  };
  