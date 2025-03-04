import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/Actions/SingleProducts/singleproductsAction";
import Navbar from "../Components/Navbar";
import MotionPath from "../Components/loader";
import AddToCartButton from "../utils/addToCart";
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

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-gradient-to-r from-purple-200 to-blue-100 items-center ">
        <div className=" justify-center items-center flex ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow-xl border border-gray-200 w-full max-w-4xl">
            <div className="flex flex-col items-center">
              {isLoading ? (
                <div className="flex justify-center">
                  <MotionPath />
                </div>
              ) : isError ? (
                <div style={{ color: "red" }}>
                  Error loading product details.
                </div>
              ) : (
                products && (
                  <div className=" rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img
                      className="lg:w-[400px] border-2 p-2 lg:h-[400px] w-[300px] h-[300px] rounded-lg"
                      src={products?.image}
                      alt={products?.name}
                    />
                    <p className="text-gray-800 mt-4 text-center">
                      <span className="font-semibold ">Product Id:</span>{" "}
                      {products?.id}
                    </p>
                  </div>
                )
              )}
            </div>
            <div className="md:flex-1 px-4">
              {isLoading || isError ? (
                <div></div>
              ) : (
                products && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {products?.name}
                    </h2>
                    <div className="flex mb-4">
                      <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">
                          Price: ₹{products?.price}
                        </span>
                      </div>
                    </div>
                    <div className="mr-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Category: {products?.category?.name}
                      </span>
                    </div>
                    <div className="mb-4 mr-4 mt-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Select Color:
                      </span>
                      <Button colors={colorOptions} />
                    </div>
                    <div className="mt-4">
                      <span className="font-bold mt-5 text-gray-700 dark:text-gray-300">
                        Product Description:
                      </span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {products?.description}
                      </p>
                    </div>
                    <div className="mt-6">
                      <AddToCartButton productId={products} />
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
