module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["'Montserrat'"]
      },
      backgroundImage: {
        "profile-picture": "url('/public/images/profile-image.jpeg')",
        
      }
    },
  },
  plugins: [],
}