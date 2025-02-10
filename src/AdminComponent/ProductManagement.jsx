import React, { useEffect, useState } from "react";
import image from "../Images/Product.svg";
import filter from "../Images/sort.svg";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProducts } from "./ActionsAdmin/Allproducts/productAction";
import ToastMessage from "../utils/ToastMessage";
import { ProductMessages } from "../utils/statusMessages";
import MotionPath from "../Components/loader";
import Pagination from "../utils/Pagination";

const ProductManagement = () => {
  const dispatch = useDispatch();
  const { products, totalProducts, isError, isLoading } = useSelector(
    (state) => state.getAllProducts
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(GetAllProducts(itemsPerPage, currentPage));
  }, [dispatch, currentPage]);

  if (isError) {
    return <ToastMessage message={ProductMessages.NOT_FETCH} />;
  }

  const fields = ["name", "category.name", "price", "countInStock"];
  const cellClass = "px-3 py-4 text-sm";

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-16">
      <div className="bg-white flex flex-col md:flex-row justify-between my-4 shadow-md items-center rounded-md p-4">
        <div className="flex items-center">
          <img className="h-16 w-16 md:h-20 md:w-20" src={image} alt="" />
          <h4 className="font-semibold text-xl md:text-3xl ml-4">
            Products Management
          </h4>
        </div>
        <div className="flex items-center cursor-pointer mt-2 md:mt-0">
          <img className="h-6 md:h-[1.70rem]" src={filter} alt="" />
          <h4 className="font-semibold text-lg md:text-xl mx-1">Sort</h4>
        </div>
      </div>

      <div className="border-2 border-gray-200 shadow-md rounded-md p-4 md:p-6 bg-white">
        <input
          type="text"
          placeholder="Search Products"
          className="w-full border-2 h-10 md:h-12 rounded-lg px-2 mb-3"
        />

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="bg-gray-300 text-gray-800 uppercase">
              <tr>
                <th className={cellClass}>PRODUCT NAME</th>
                <th className={cellClass}>CATEGORY</th>
                <th className={cellClass}>Price</th>
                <th className={cellClass}>COUNT IN STOCK</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <MotionPath />
              ) : (
                products?.map((product) => (
                  <tr key={product._id} className="border-b">
                    {fields.map((field, index) => {
                      const value = field
                        .split(".")
                        .reduce((a, key) => a?.[key], product);
                      return (
                        <td key={index} className={cellClass}>
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          totalItems={totalProducts}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductManagement;
