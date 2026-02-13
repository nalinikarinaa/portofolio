

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        // "pink": '#FDB0C0', #c36681
        "pink": '#E56B9A',
        "pink2": '#E98BB0',
        "pinktua": '#C36681',
        // "pinkmuda": '#FEDDDE' #ffccd5
        "pinkmuda": '#E98BB0',
        "cream": '#EDE9DD',
        "birutua" : '#0F4C75',
        "birumuda" : '#6FAED3'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
