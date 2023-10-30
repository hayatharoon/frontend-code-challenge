/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}', './layouts/**/*.{html,jsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-color': '#0052CC',
        'light-gray': '#FAFBFC',
        //==========================
        'extra-Light-gray': '#F7F7F7',
        'light-gray': '#4545501A',
        'text-gray': '#6E6E6E',
        'border-gray': '#DAE1E8',
        green: '#1FD125',
        'dim-green': '#047A7C',
        'dim-purple': '#5962A9',
        yellow: '#FFCD34',
        pink: '#EF2F88',
        orange: '#F6911E',
        'sky-blue': '#0099D8',
        'theme-color': '#7C047A',
        white: '#fff',
        black: '#000',
        gray: '#707070',
        cyan: '#00ABBC',
        white: '#fff',
        black: '#000',
        gray: '#707070',
        'light-purple': '#E9E1FD',
        lightBlack: '#404040',
        'dark-purple': '#81047F',
        darkiest: '#111111',
        ligtText: '#6C757D',
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
