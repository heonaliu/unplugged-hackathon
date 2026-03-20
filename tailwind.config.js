/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          beige: "#F6F5F2",
          sage: "#A3B18A",
          orange: "#F08A5D",
          purple: "#856de5",
          teal: "#21a0a0",
          bluegray: "#8E9AAF",
          charcoal: "#2F2F2F",
      },
      fontFamily: {
        gordita: ["Gordita", "sans-serif"],
        rubikOne: ["Rubik One", "sans-serif"],
      },
    },
    plugins: [],
    
  }
}

