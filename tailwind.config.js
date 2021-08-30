module.exports = {
  purge: {
    enabled: false,
    content:['./*.html']},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ['active'],
      display:['group-hover']
    },
  },
  plugins: [],
}
