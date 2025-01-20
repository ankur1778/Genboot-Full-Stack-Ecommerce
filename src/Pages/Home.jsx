import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import mensFashionImage from "../Images/12.jpeg";
import womensFashionImage from "../Images/11.jpg";
import electronicsImage from "../Images/electronics.jpg";
import stationeryImage from "../Images/15.jpg";
import sportsImage from "../Images/13.jpg";
import shoeImage from "../Images/14.jpg";
import { Link } from "react-router";
const Home = () => {
  const [categoryId, setCategoryId] = useState("");
  return (
    <>
      <Navbar />
      <Carousel showArrows={true} showThumbs={false}>
        <div className="mx-8 bg-homeFeaturedImage1 h-[450px] my-4 rounded-3xl  bg-cover bg-center">
          <div className="flex justify-end">
            <h1 className="font-semibold  py-20  text-3xl mt-20 sm:text-4xl md:text-[48px] font-serif sm:mx-8 sm:p-12  ">
              Discover More,
              <br /> <br />
              Spend Less!
            </h1>
          </div>
        </div>
        <div className="mx-8 bg-homeFeaturedImage2 h-[450px] my-4 rounded-3xl  bg-cover bg-center">
          <div className="flex justify-end">
            <h1 className="font-semibold py-20 text-3xl mt-20 sm:text-3xl md:text-[48px] font-serif mx-4 sm:mx-8   sm:p-12  ">
              Shop The Best,
              <br /> <br />
              Forget The Rest!
            </h1>
          </div>
        </div>
        <div className="mx-8 bg-homeFeaturedImage3 h-[450px] my-4 rounded-3xl  bg-cover bg-center">
          <div className="flex justify-end">
            <h1 className="font-semibold py-20 text-3xl mt-20 sm:text-4xl md:text-[40px] font-serif mx-4 sm:mx-8   sm:p-12  ">
              From Wishlist to Doorstep
              <br /> <br />
              We Make Shopping Simple!
            </h1>
          </div>
        </div>
        <div className="mx-8 bg-homeFeaturedImage4 h-[450px] my-4 rounded-3xl  bg-cover bg-center">
          <div className="flex justify-start ms-20">
            <h1 className="font-semibold py-20 text-3xl mt-10 sm:text-4xl md:text-5xl font-serif mx-4 sm:mx-8 text-white sm:p-12  ">
              Shop. Save.
              <br /> <br />
              Smile More!
            </h1>
          </div>
        </div>
      </Carousel>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mx-4">
        <div className="border-2 p-2 rounded-lg">
          <img
            onClick={() => setCategoryId("678648a39120121d022301c2")}
            src={mensFashionImage}
            alt="Men's Fashion"
            className="h-40 rounded-2xl shadow-xl cursor-pointer w-full object-cover"
          />
          <p className="flex justify-center font-semibold text-lg font-serif">
            Men's Fashion
          </p>
        </div>
        <div className="border-2 p-2 rounded-lg">
          <img
            onClick={() => setCategoryId("678648ac9120121d022301c5")}
            src={womensFashionImage}
            alt="Women's Fashion"
            className="h-40 rounded-2xl shadow-xl cursor-pointer w-full object-cover"
          />
          <p className="flex justify-center font-semibold text-lg font-serif">
            Women's Fashion
          </p>
        </div>
        <div className="border-2 p-2 rounded-lg">
          <img
            onClick={() => setCategoryId("678737bc8705db57a979c0a1")}
            src={sportsImage}
            alt="Sport Items"
            className="h-40 rounded-2xl shadow-xl cursor-pointer w-full object-cover"
          />
          <p className="flex justify-center font-semibold text-lg font-serif">
            Sports
          </p>
        </div>
        <div className="border-2 p-2 rounded-lg">
          <img
            onClick={() => setCategoryId("6787446e8705db57a979c0e4")}
            src={shoeImage}
            alt="Shoes"
            className="h-40 rounded-2xl shadow-xl cursor-pointer w-full object-cover"
          />
          <p className="flex justify-center font-semibold text-lg font-serif">
            Shoes
          </p>
        </div>
        <div className="border-2 p-2 rounded-lg">
          <img
            onClick={() => setCategoryId("67873bc18705db57a979c0c2")}
            src={stationeryImage}
            alt="Stattionery Items"
            className="h-40 rounded-2xl shadow-xl cursor-pointer w-full"
          />
          <p className="flex justify-center font-semibold text-lg font-serif">
            Stationery Items
          </p>
        </div>
        <div className="border-2 p-2 rounded-lg">
          <img
            onClick={() => setCategoryId("678748c08705db57a979c105")}
            className="h-40 rounded-2xl shadow-xl cursor-pointer w-full object-cover"
            src={electronicsImage}
            alt="Electronics"
          />
          <p className="flex justify-center font-semibold text-lg font-serif">
            Electronics
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/all-products">
          <button className="mt-8 bg-black text-white px-6 py-3 text-lg lg:text-xl font-semibold rounded-xl hover:bg-opacity-90 transition">
            Let's Explore
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
