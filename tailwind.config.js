/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    fontFamily: {
      sans: 'Gantari, sans-serif',
      body: 'Open Sans',
    },

    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        brand: {
          default: '#2e3959',
          light: '#596386',
          dark: '#031330',
        },
        background: {
          light: '#fefefe',
          dark: '#031330',
        },

        accent: {
          DEFAULT: '#E900FF',
          hover: '#BB864E',
        },

        gray: '#766F66',
        white: '#ffffff',
      },
      spacing: {
        54: '54px',
        800: '800px',
      },
    },
  },
  plugins: [],
}
