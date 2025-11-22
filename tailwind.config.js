

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        // "pink": '#FDB0C0', #c36681
        "pink": '#C36681',
        "pinkk": '#C36681',
        // "pinkmuda": '#FEDDDE' #ffccd5
        "pinkmuda": '#FFCCD5',
        "cream": '#EDE9DD'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
