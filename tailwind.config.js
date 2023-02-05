/** @type {import('tailwindcss').Config} */ 
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito Sans', sans-serif",
        quicksand: "'Quicksand', sans-serif",
        edusa: "'Edu SA Beginner', cursive",
      },
      colors: {
        // self made
        // primary: "#13022D",
        // secondary: "#360388",
        // tertiary: "#5520d2",
        // highlight: "#FB7185",
        // purple color
        primary: "#00005C",
        secondary: "#3B185F",
        tertiary: "#C060A1",
        // notertiary: "#3B185F",
        // nosecondary: "#C060A1",
        notertiary: "#C060A1",
        nosecondary: "#3B185F",
        highlight: "#F0CAA3",
      }
    },
  },
  plugins: [],
}