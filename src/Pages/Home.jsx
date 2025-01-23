import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router";
import { getAllCategories } from "../Redux/Actions/CategoriesAction/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import MotionPath from "../Components/loader";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, categories } = useSelector(
    (state) => state.allCategories
  );
  console.log(categories);
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  if (error) {
    return (
      <div>
        <MotionPath />
      </div>
    );
  }
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
        {loading ? (
          <MotionPath />
        ) : categories ? (
          categories.map((category) => (
            <div key={category?._id}>
              <Link to={`category/${category._id}`}>
                <div>
                  <img
                    src={category?.image}
                    alt={category?.name}
                    className="h-40 rounded-2xl shadow-xl cursor-pointer w-full object-cover"
                  />
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="h-20 items-center flex justify-center">
            <MotionPath />
          </div>
        )}
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
