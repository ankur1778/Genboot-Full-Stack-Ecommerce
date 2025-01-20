/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeFeaturedImage1: "url('../src/Images/homeFeaturedImage1.png')",
        homeFeaturedImage2: "url('../src/Images/homeFeaturedImage2.png')",
        homeFeaturedImage3: "url('../src/Images/homeFeaturedImage3.jpg')",
        homeFeaturedImage4: "url('../src/Images/homeFeaturedImage4.jpg')",
      },
    },
  },
  plugins: [],
}
