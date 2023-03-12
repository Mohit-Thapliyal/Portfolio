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
        // notertiary: "#360388",
        // nosecondary: "#5520d2",
        // highlight: "#FB7185",

        // purple theme
        // primary: "#00005C",
        // primary: "#000000",
        // secondary: "#3B185F",
        // tertiary: "#C060A1",
        // nosecondary: "#3B185F",
        // notertiary: "#C060A1",
        // highlight: "#F0CAA3",

        // Brick theme
        // primary: "#210808",
        // secondary: "#461111",
        // tertiary: "#A13333",
        // nosecondary: "#461111",
        // notertiary: "#A13333",
        // highlight: "#FEC260",

        // Blue theme
        // primary: "#071E3D",
        // secondary: "#1F4287",
        // tertiary: "#278EA5",
        // nosecondary: "#1F4287",
        // notertiary: "#278EA5",
        // highlight: "#21E6C1",

        // Green theme
        // primary: "#000000",
        // secondary: "#3E432E",
        // tertiary: "#616F39",
        // nosecondary: "#3E432E",
        // notertiary: "#616F39",
        // highlight: "#FEC260",
        
        // highlight: "#A7D129",

        // Crio theme
        // primary: "#023437",
        // secondary: "#01644A",

        primary: "#061a1b",
        secondary: "#0f4548",
        tertiary: "#05B683",
        nosecondary: "#0f4548",
        notertiary: "#05B683",
        // highlight: "#EFDB4F",
        highlight: "#CDFF00",
        // highlight: "#eedb32",
        // highlight: "#FEC260",

      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide')
  ]
}