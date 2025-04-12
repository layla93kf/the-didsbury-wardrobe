module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        lightGrey: '#f8f8f2',
        darkGrey: '#c0c0c0',
        black: '#0d0d0c',
      },
      fontFamily: {
        'old-standard': ['Old Standard TT', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};
