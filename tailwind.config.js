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
        categoryPageFeaturedImage1:"url('../src/Images/catProdFetaured1.jpg')",
        categoryPageFeaturedImage2:"url('../src/Images/catProdFetaured2.jpg')",
        categoryPageFeaturedImage3:"url('../src/Images/catProdFetaured3.jpg')",
        categoryPageFeaturedImage4:"url('../src/Images/catProdFetaured4.jpg')",
      },
    },
  },
  plugins: [],
};
