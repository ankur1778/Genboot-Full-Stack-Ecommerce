import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../Redux/Actions/AllProducts/allProductAction";
import { Carousel } from "react-responsive-carousel";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector(
    (state) => state.allProducts
  );
  console.log(products, "kggs");

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
          <div>Loading...</div>
        ) : isError ? (
          <div style={{ color: "red" }}>Error loading products.</div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {products?.map((product) => (
              <div key={product.id} className="px-10">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="rounded-md relative max-w-sm mx-auto shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 hover:scale-110 p-5 h-72 w-60 "
                />
                <h5 className="flex text-lg italic my-2">{product.name}</h5>
                <p>₹{product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;