import React from "react";
import Navbar from "./Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel showArrows={true}>
        <div className="bg-homeFeaturedImage h-96 my-4 rounded-3xl bg-cover bg-center">
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl font-serif mx-4 sm:mx-8 lg:mx-40 p-8 sm:p-12 md:p-16 text-slate-400 text-center">
            Shop The Best,
          </h1>
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl font-serif mx-4 sm:mx-8 lg:mx-40 p-2 sm:p-4 md:p-1 text-slate-400 text-center">
            Forget The Rest!
          </h1>
        </div>
        <div className="bg-BackgroundImage h-96 my-4 rounded-3xl bg-cover bg-center">
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl font-serif mx-4 sm:mx-8 lg:mx-40 p-8 sm:p-12 md:p-16 text-slate-400 text-center">
            Shop The Best,
          </h1>
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl font-serif mx-4 sm:mx-8 lg:mx-40 p-2 sm:p-4 md:p-1 text-slate-400 text-center">
            Forget The Rest!
          </h1>
        </div>
      </Carousel>
    </>
  );
};

export default Home;
