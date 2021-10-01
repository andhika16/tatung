module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['"IBM Plex Sans"', 'sans-serif']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#39A388',
      'secondary': '#2C2891'
      
}),
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
