import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../Redux/Actions/SingleProducts/singleproductsAction";
import Navbar from "../Components/Navbar";
import MotionPath from "../Components/loader";
import AddToCartButton from "../utils/addToCart";
import ToastMessage from "../utils/ToastMessage";
import { ProductMessages } from "../utils/statusMessages";

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { products, isLoading, isError } = useSelector(
    (state) => state.singleProduct
  );

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (isError) {
      ToastMessage({ message: ProductMessages.NOT_FETCH });
    }
  }, [isError]);
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 dark:bg-gray-800 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              {isLoading ? (
                <div className="flex justify-center">
                  <MotionPath />
                </div>
              ) : (
                products && (
                  <div className=" rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img
                      className="w-full h-80"
                      src={products?.image}
                      alt={products?.name}
                    />
                  </div>
                )
              )}
            </div>
            <div className="md:flex-1 px-4">
              {products && (
                <>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {products?.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {products?.description}
                  </p>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Price:
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        ₹{products?.price}
                      </span>
                    </div>
                  </div>
                  <div className="mr-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Category:
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {products?.category?.name}
                    </span>
                  </div>
                  <div className="mb-4 mr-4">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Select Color:
                    </span>
                    <div className="flex items-center mt-2">
                      <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                      <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                      <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                      <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      Product Description:
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {products?.description}
                    </p>
                  </div>
                  <div className="mt-6">
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
