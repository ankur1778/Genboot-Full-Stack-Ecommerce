import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/Actions/SingleProducts/singleproductsAction";
import Navbar from "../Components/Navbar";
import MotionPath from "../Components/loader";
import AddToCartButton from "../utils/addToCart";
import ToastMessage from "../utils/ToastMessage";
import { ProductMessages } from "../utils/statusMessages";
import Button from "../utils/button";

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { products, isLoading, isError } = useSelector(
    (state) => state.singleProduct
  );

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

  const colorOptions = [
    { light: "bg-gray-800", dark: "bg-gray-200" },
    { light: "bg-red-500", dark: "bg-red-700" },
    { light: "bg-blue-500", dark: "bg-blue-700" },
    { light: "bg-yellow-500", dark: "bg-yellow-700" },
  ];

  useEffect(() => {
    if (isError) {
      ToastMessage({ message: ProductMessages.NOT_FETCH });
    }
  }, [isError]);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 dark:bg-gray-900 py-12 mt-6 rounded-3xl shadow-2xl">

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:flex-2 px-4">
              {isLoading ? (
                <div className="flex justify-center">
                  <MotionPath />
                </div>
              ) : (
                products && (
                  <div className="rounded-2xl bg-gradient-to-r from-[#F0EBE3] to-[#E8D3A4] shadow-xl hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105">
                    <img
                      className="w-full h-96 p-4 object-contain rounded-2xl transition duration-500 ease-in-out transform hover:scale-110"
                      src={products?.image}
                      alt={products?.name}
                    />
                  </div>
                )
              )}
            </div>

            <div className="md:flex-1 px-4 flex flex-col justify-between">
              {products && (
                <>
                  <h2 className="text-4xl font-semibold font-serif text-[#3E2C41] dark:text-white mb-6 transition duration-500 ease-in-out transform hover:scale-105">
                    {products?.name}
                  </h2>

                  <div className="flex items-center justify-between mb-5">
                    <div className="mr-4 mt-3">
                      <span className="font-semibold text-xl text-[#6A4C3C] dark:text-gray-300">
                        Price:
                      </span>
                      <span className="text-2xl font-bold text-[#F19C42] dark:text-[#F7A00F]">
                        ₹{products?.price}
                      </span>
                    </div>
                  </div>

                  <div className="mr-4 mt-3 mb-4">
                    <span className="font-semibold text-xl text-[#6A4C3C] dark:text-gray-300">
                      Category:
                    </span>
                    <span className="text-xl text-[#8E6B4E] ml-1 dark:text-gray-300 font-semibold">
                      {products?.category?.name}
                    </span>
                  </div>

                  <div className="mb-4 mt-6">
                    <span className="font-semibold text-xl text-[#6A4C3C] dark:text-gray-300">
                      Select Color:
                    </span>
                    <div className="mt-2">
                      <Button colors={colorOptions} />
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="font-semibold text-xl text-[#6A4C3C] dark:text-gray-300">
                      Product Description:
                    </span>
                    <p className="text-lg text-[#4C4A4A] dark:text-gray-300 mt-2 font-medium leading-relaxed">
                      {products?.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <AddToCartButton productId={products?._id} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
