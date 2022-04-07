module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      }
    },
    extend: {
      fontFamily: {
        'rubik-moonrocks': ['Rubik Moonrocks', 'sans-serif'],
        'roboto-light': ['Roboto Light', 'sans-serif'],
        'roboto-bold': ['Roboto Bold', 'sans-serif']
      }
    },
  },
  plugins: [],
}
