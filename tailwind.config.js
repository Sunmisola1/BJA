/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      
      textAlign: {
      'justify': 'justify',
    },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
       roboto: ['Roboto', 'sans-serif'],
    },
    width: {
      '128': '32rem', // 512px
      '144': '36rem', // 576px
      '160': '40rem', // 640px
      '200': '50rem', // 800px
      // Add any other custom widths you need
    }, height: {
      '128': '32rem', // 512px
      '144': '36rem', // 576px
      '160': '40rem', // 640px
      '200': '50rem', // 800px
      // Add any other custom widths you need
    }
    // boxShadow: {
    //   'top': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -2px rgba(0, 0, 0, 0.06)',
    //   'bottom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
    //   'top-bottom': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -2px rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
    // },
  },
  },
  plugins: [],
}