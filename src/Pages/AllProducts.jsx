import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/Actions/AllProducts/allProductAction";
import { Carousel } from "react-responsive-carousel";
import AddToCartButton from "../utils/addToCart";
import MotionPath from "../Components/loader";
import { Link } from "react-router-dom";
import ToastMessage from "../utils/ToastMessage";
import { ProductMessages } from "../utils/statusMessages";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector(
    (state) => state.allProducts
  );
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (isError) {
    <ToastMessage message={ProductMessages.NOT_FETCH} />;
  }
  return (
    <>
      <Navbar />
      <Carousel showArrows={true} showThumbs={false}>
        <div className="mx-8 h-[450px] my-4 rounded-3xl bg-cover bg-center bg-ProductFeaturedImage ">
          <div className="flex justify-start">
            <h1 className="font-semibold py-20 text-3xl text-white sm:text-4xl md:text-[48px] font-[italic] sm:mx-8 sm:p-12">
              Effortlessly Blend
              <br />
              Comfort
              <br />& Style !
            </h1>
          </div>
        </div>
        <div className="mx-8 h-[450px] my-4 rounded-3xl bg-cover bg-center bg-ProductFeaturedImage2 ">
          <div className="flex justify-start">
            <h1 className="font-semibold py-20 text-3xl text-white mt-20 sm:text-4xl md:text-[48px] font-[italic] sm:mx-8 sm:p-12">
              Show Your Personal Style!
            </h1>
          </div>
        </div>
        <div className="mx-8 h-[450px] my-4 rounded-3xl bg-cover bg-ProductFeaturedImage3 ">
          <div className="flex justify-start w-1/2">
            <h1 className="font-semibold py-20 text-3xl text-white mt-20 sm:text-4xl md:text-[48px] italic sm:mx-8 sm:p-12">
              Sale 20% Off
              <br />
              <p className="text-lg text-justify">
                On Everything Explicabo esse amet tempora quibusdam laudantium,
                laborum eaque magnam fugiat hic? Esse dicta aliquid error
                repudiandae earum suscipit fugiat molestias, veniam, vel
                architecto veritatis delectus repellat modi impedit sequi.
              </p>
            </h1>
          </div>
        </div>
      </Carousel>
      <div className="product-list">
        {isLoading ? (
          <MotionPath />
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-md rounded-lg px-10 py-10"
              >
                <Link to={`/product/${product._id}`}>
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
                  <AddToCartButton productId={product} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;
