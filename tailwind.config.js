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

        accent: {
          DEFAULT: '#CF9455',
          hover: '#BB864E',
        },

        gray: '#766F66',
        white: '#ffffff',
      },
      spacing: {
        54: '54px',
        800: '800px',
      },

      content: {
        quote: 'url("assets/img/quoteMark.png")',
      },
    },
  },
  plugins: [],
}
