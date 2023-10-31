/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}', './layouts/**/*.{html,jsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-color': '#7c047a',
        'light-gray': '#FAFBFC',
        'dark-red': '#D82732',
      },
      fontFamily: {
        cairo: ['cairo', 'sans-serif'],
      },
      boxShadow: {
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px',
      },
    },
  },
  plugins: [],
};
