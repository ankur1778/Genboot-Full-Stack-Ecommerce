import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/Actions/AllProducts/allProductAction";
import { Carousel } from "react-responsive-carousel";
import AddToCartButton from "../utils/addToCart";
import MotionPath from "../Components/loader";

const AllProducts = ({ product }) => {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector(
    (state) => state.allProducts
  );

  console.log(products);
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

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
          <div className="flex justify-center"><MotionPath /></div>
        ) : isError ? (
          <div style={{ color: "red" }}>Error loading products.</div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-md rounded-lg px-10 py-10"
              >
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
                <div className="mt-6 flex justify-between items-center">
                  {/* <button onClick={()=>AddToCartButton } className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                    Add to cart
                  </button> */}
                  <AddToCartButton
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    productId={product}
                  />
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
