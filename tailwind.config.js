module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins'],
    },
    screens: {
      xl: { max: '1200px' },
      lg: { max: '992px' },
      md: { max: '768px' },
      sm: { max: '576px' },
      xs: { max: '480px' },
    },
  },
  plugins: [],
};
