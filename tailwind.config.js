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
        AboutFeaturedImage: "url('../src/Images/AboutFeaturedImage.jpg')",
        AboutFeaturedImage2: "url('../src/Images/AboutFeaturedImage2.jpg')",
        ProductFeaturedImage: "url('../src/Images/ProductFeaturedImage.jpg')",
        ProductFeaturedImage2: "url('../src/Images/ProductFeaturedImage2.jpg')",
        ProductFeaturedImage3: "url('../src/Images/ProductFeaturedImage3.jpg')",
      },
    },
  },
  plugins: [],
};
