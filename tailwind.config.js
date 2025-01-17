/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeFeaturedImage: "url('../src/Images/HomeBackgroundImage.png')",
        BackgroundImage: "url('../src/Images/BackgroundImage1.png')",
      },
    },
  },
  plugins: [],
}
