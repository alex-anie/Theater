/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
        badScript: ["Bad Script", "sans-serif"],
        castoroTitling: ["Castoro Titling", "sans-serif"],
        greatVibes: ["Great Vibes", "sans-serif"],
      },
    },

    variants: {
      extend: {
        textColor: ["group-hover"],
      },
    },
  },
  plugins: [],
};

