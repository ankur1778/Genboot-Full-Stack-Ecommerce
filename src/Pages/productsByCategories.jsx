import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductsByCategories } from "../Redux/Actions/ProductsByCategories/productByCategoriesAction";
import Navbar from "../Components/Navbar";
import MotionPath from "../Components/loader";
import { Carousel } from "react-responsive-carousel";

const ProductsByCategories = () => {
  const { categoryId } = useParams();
  const { productsByCategories, isError, isLoading } = useSelector(
    (state) => state.productsByCategory
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByCategories(categoryId));
  }, [dispatch, categoryId]);
  return (
    <>
      <Navbar />
      <Carousel showArrows={true} showThumbs={false} interval={3000}>
        <div className="mx-8 bg-categoryPageFeaturedImage1 h-[450px] my-4 rounded-3xl  bg-cover bg-center">
          <div className="flex justify-start">
            <h1 className="font-semibold  py-20  text-3xl mt-20 sm:text-4xl md:text-[48px] font-serif sm:mx-8 sm:p-12  ">
              Discover More,
              <br /> <br />
              Spend Less!
            </h1>
          </div>
        </div>
        <div className="mx-8 bg-categoryPageFeaturedImage2 h-[450px] my-4 rounded-3xl  bg-cover bg-center">
          <div className="flex justify-end">
            <h1 className="font-semibold py-20 text-3xl mt-20 sm:text-3xl md:text-[48px] font-serif mx-4 sm:mx-8   sm:p-12  ">
              Shop The Best,
              <br /> <br />
              Forget The Rest!
            </h1>
          </div>
        </div>
        <div className="mx-8 bg-categoryPageFeaturedImage3 h-[450px] my-4 rounded-3xl  bg-cover bg-center">
          <div className="flex justify-end w-1/3">
            <h1 className="font-semibold py-20 text-3xl mt-20 sm:text-4xl md:text-[40px] font-serif mx-4 sm:mx-8   sm:p-12  ">
              From Wishlist to Doorstep
              <br /> <br />
              We Make Shopping Simple!
            </h1>
          </div>
        </div>
        <div className="mx-8 bg-categoryPageFeaturedImage4 h-[450px] my-4 rounded-3xl  bg-cover bg-center">
          <div className="flex justify-start ms-20">
            <h1 className="font-semibold py-20 text-3xl mt-10 sm:text-4xl md:text-5xl font-serif mx-4 sm:mx-8 text-black sm:p-12  ">
              Shop. Save.
              <br /> <br />
              Smile More!
            </h1>
          </div>
        </div>
      </Carousel>
      {isLoading ? (
        <div>
          <MotionPath />
        </div>
      ) : isError ? (
        <div>
          <MotionPath />
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center bg-gray-100">
            <div className="flex justify-center h-20 items-center mt-10">
              <h1 className="text-[60px] font-semibold italic ">
                {productsByCategories[0]?.category?.name}
              </h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
              {productsByCategories.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-md rounded-lg px-10 py-10"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="flex justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 hover:scale-110 rounded-md h-48 delay-700 ease-in"
                      />
                    </div>
                    <div className="mt-4">
                      <h1 className="text-sm uppercase font-bold">
                        {product.name}
                      </h1>
                      <p className="mt-2 text-gray-600 text-sm">
                        {product.description.slice(0, 40)}...
                      </p>
                      <p className="mt-2 text-gray-600">₹{product.price}</p>
                    </div>
                  </Link>
                  <div className="mt-6 flex justify-between items-center">
                    <button className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductsByCategories;
