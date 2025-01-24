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
      ) : (
        <>
          <div className="flex justify-center h-20 items-center mt-10">
            <h1 className="text-[60px] font-semibold italic ">
              {productsByCategories[0]?.category?.name}
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-16">
            {productsByCategories?.map((product) => (
              <div key={product.id} className="px-10">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="bg-gray-100 font-semibold hover:scale-110 rounded-lg p-4 h-80 w-60 "
                  />
                  <h5 className="text-lg font-serif italic">{product.name}</h5>
                  <p>₹{product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ProductsByCategories;
