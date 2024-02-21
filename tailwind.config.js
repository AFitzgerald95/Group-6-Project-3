module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Changed from 'purge' to 'content'
  theme: {
    extend: {},
  },
  plugins: [],
};
