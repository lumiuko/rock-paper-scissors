/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        line: 'rgba(255, 255, 255, 0.289199)',
        gray: '#565468',
        blue: '#2a45c2',
        placeholder: 'rgba(0, 0, 0, 0.1)',
        'dark-blue': '#3b4262'
      },
      boxShadow: {
        default: '0px 3px 3px rgba(0, 0, 0, 0.196706)',
        imageContainer: '0px -6px 0px 0px #babfd4',
        item: '0px 0px 0px 25px rgba(255, 255, 255, 0.05)'
      }
    },
    fontFamily: {
      sans: ['Barlow Semi Condensed', 'sans-serif']
    },
    fontSize: {
      default: '1rem',
      heading: '1.25rem',
      md: '1.5rem',
      modal: '2rem',
      'heading-md': '2.5rem',
      result: '3.5rem',
      large: '4rem'
    },
    lineHeight: {
      heading: '1rem',
      'heading-md': '2rem',
      default: '1'
    },
    borderRadius: {
      none: '0',
      sm: '5px',
      md: '15px',
      'score-sm': '4px',
      'score-md': '8px',
      full: '50%'
    },
    backgroundImage: {
      main: 'radial-gradient(134.34% 134.34% at 50% 0%, #1f3757 0%, #131537 100%)',
      white: 'linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%)',
      triangle: 'url("assets/images/bg-triangle.svg")',
      imageContainer: 'linear-gradient(0deg, #f3f3f3 0%, #dadada 98.34%)'
    },
    letterSpacing: {
      button: '2.5px',
      item: '1.8px'
    }
  },
  plugins: []
}
