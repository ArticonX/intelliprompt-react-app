module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        intellipromptOrange: {
          light: '#FFA726',
          DEFAULT: '#FB8C00',
          dark: '#F57C00'
        }
      },
      backgroundImage: {
        'intelliprompt-gradient': 'linear-gradient(135deg, #667eea, #764ba2)'
      }
    },
  },
  plugins: [],
}
