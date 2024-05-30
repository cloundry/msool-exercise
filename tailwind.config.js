/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      screens: {
        xs: '0px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
      },
      colors: {
        primary: '#5B3FFF',
        secondary: '#261b6a',
        lightGray: '#f9f7ff',
        subText: '#8e98a1',
      },
      backgroundImage: {
        bgPrimary: "url('./BackgroundPrimary.png')",
      },
      animation: {
        'reverse-spin': 'reverse-spin 1s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
