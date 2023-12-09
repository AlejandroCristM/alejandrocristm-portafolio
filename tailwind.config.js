/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      'blue-prussian': '#012A4A',
      'green-slimy': '#468F28',
      'orange-web': '#FB8500',
      platinium: '#E5E5E5',
      white: '#ffffff',
      black: '#000000',
      green: '#468F28',
    },
    fontFamily: {
      sans: ['Poppins', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
