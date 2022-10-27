module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["'Montserrat'"],
      },
      backgroundImage: {
        "profile-picture": "url('/public/images/profile-image.jpeg')",
        "twitter-app": "url('/public/images/twitter-app.jpg')",
        "odm-app": "url('/public/images/odm-app.jpg')",
        "landing-mr": "url('/public/images/landing-mr.jpg')",
      },
    },
  },
  plugins: [],
};
