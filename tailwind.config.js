module.exports = {
  purge: {
    enabled: true,
    content:['./*.html']},
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '14': '3.5rem',
    },
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
