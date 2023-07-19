module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}',
    'src/containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
  purge: {
    options: {
      safelist: ['dark'],
    },
  },
};
