import React, { useEffect } from "react";
import image from "../Images/Product.svg";
import filter from "../Images/sort.svg";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProducts } from "./ActionsAdmin/Allproducts/productAction";
import ToastMessage from "../utils/ToastMessage";
import { ProductMessages } from "../utils/statusMessages";
import MotionPath from "../Components/loader";

const ProductManagement = () => {
  const dispatch = useDispatch();
  const { products, isError, isLoading } = useSelector(
    (state) => state.getAllProducts
  );

  useEffect(() => {
    dispatch(GetAllProducts());
  }, [dispatch]);

  if (isError) {
    <ToastMessage message={ProductMessages.NOT_FETCH} />;
  }
  return (
    <>
      <div className="bg-gray-400 h-screen border-2 border-neutral-100">
        <div className="bg-white flex justify-between my-7 shadow-md items-center rounded-md p-1 mx-16">
          <div className="flex">
            <img className="h-20 w-20" src={image} alt="" />
            <h4 className="font-semibold text-3xl my-5">Products Management</h4>
          </div>
          <div className="flex justify-end me-6 items-center cursor-pointer">
            <img className="h-[1.70rem]" src={filter} alt="" />
            <h4 className="font-semibold text-xl mx-1">Sort</h4>
          </div>
        </div>
        <div className="border-2 border-gray-200 shadow-md rounded-md p-6 bg-white mx-16">
          <input
            type="text"
            placeholder="Search Products"
            className="w-full border-2 h-12 rounded-lg px-2"
          />
          <div className="relative overflow-x-auto my-3">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-3 py-3">
                    Product Name
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Available
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <MotionPath />
                ) : (
                  products?.map((product) => (
                    <tr key={product._id}>
                      <td className="px-3 py-3">{product?.name}</td>
                      <td className="px-3 py-3">{product?.category?.name}</td>
                      <td className="px-3 py-3">{product?.price}</td>
                      <td className="px-3 py-3">{product?.countInStock}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductManagement;
