import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import AddToCartButton from "../utils/addToCart";
import MotionPath from "../Components/loader";
import { Link } from "react-router-dom";
import ToastMessage from "../utils/ToastMessage";
import { ProductMessages } from "../utils/statusMessages";
import AddToWishlistButton from "../utils/addToWishlist";
import Pagination from "../utils/Pagination";
import { debounce } from "lodash";
import { GetAllProducts } from "../AdminComponent/Redux/ActionsAdmin/Allproducts/productAction";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { products, totalProducts, isError, isLoading } = useSelector(
    (state) => state.getAllProducts
  );
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const itemsPerPage = 20;

  const searchHandler = debounce((e) => {
    setSearch(e.target.value);
  }, 500);

  useEffect(() => {
    dispatch(GetAllProducts(itemsPerPage, currentPage, search, sortOrder));
  }, [dispatch, currentPage, search, sortOrder]);

  const handleSort = (order) => {
    setSortOrder(order);
    setDropdownOpen(false);
  };

  if (isError) {
    return <ToastMessage message={ProductMessages.NOT_FETCH} />;
  }

  return (
    <>
      <Navbar />
      <div className="border-2 border-gray-200 flex justify-between shadow-md rounded-md p-8 m-8 md:p-6 bg-white">
        <input
          type="text"
          onChange={searchHandler}
          placeholder="Search Products"
          className="w-1/2 border-2 h-10 md:h-12 rounded-lg px-2 mb-3"
        />

        <div className="relative inline-block text-left">
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Sort Products
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-none">
              <ul className="py-1">
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleSort("")}
                >
                  All Products
                </li>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleSort("price")}
                >
                  Price: Low to High
                </li>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleSort("-price")}
                >
                  Price: High to Low
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="product-list">
        {isLoading ? (
          <MotionPath />
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
            {products?.map((product) => (
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
                    <h1 className="text-sm uppercase font-bold hover:text-blue-900">
                      {product.name}
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                      {product.description.slice(0, 40)}...
                    </p>
                    <p className="mt-2 font-semibold text-gray-600">
                      ₹{product.price}
                    </p>
                  </div>
                </Link>
                <div className="mt-6 flex justify-between items-center">
                  <AddToCartButton productId={product} />
                  <div>
                    <AddToWishlistButton product={product} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <Pagination
          totalItems={totalProducts}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default AllProducts;
