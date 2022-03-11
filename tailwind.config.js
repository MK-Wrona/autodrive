module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, 
  content: [],
  theme: {
    extend: {
      width: {
        'ipad': '669px',
        'desktop': '804px',
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-font-inter')
  ],
}
