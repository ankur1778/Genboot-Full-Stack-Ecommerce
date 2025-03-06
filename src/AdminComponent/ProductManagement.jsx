import React, { useEffect, useState } from "react";
import image from "../Images/Product.svg";
import { useDispatch, useSelector } from "react-redux";
import ToastMessage from "../utils/ToastMessage";
import { ProductMessages } from "../utils/statusMessages";
import MotionPath from "../Components/loader";
import Pagination from "../utils/Pagination";
import { debounce } from "lodash";
import EditImage from "../Images/Edit.svg";
import EditProductModal from "./Modals/EditProductModal";
import { GetAllProducts } from "./Redux/ActionsAdmin/Allproducts/productAction";
import AddProductModal from "./Modals/AddNewProductModal";

const ProductManagement = () => {
  const dispatch = useDispatch();
  const { products, totalProducts, isError, isLoading } = useSelector(
    (state) => state.getAllProducts
  );
  const [search, setSearch] = useState("");
  const [isAddProductModalOpen, setAddProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [sort, setSort] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const searchHandler = debounce((e) => {
    setSearch(e.target.value);
  }, 500);

  const handleOpenEditModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setAddProductModalOpen(false);
  };

  const handleOpenAddProductModal = () => {
    setAddProductModalOpen(true);
  };

  const handleSort = (field) => {
    if (sort === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSort(field);
      setSortOrder("asc");
    }
  };

  useEffect(() => {
    dispatch(
      GetAllProducts(itemsPerPage, currentPage, search, `${sort}:${sortOrder}`)
    );
  }, [dispatch, currentPage, search, sort, sortOrder]);

  if (isError) {
    return <ToastMessage message={ProductMessages.NOT_FETCH} />;
  }

  const fields = ["name", "category.name", "price", "countInStock"];
  const cellClass = "px-3 py-4 text-sm";

  return (
    <div className="bg-gray-300 min-h-screen py-10 px-4 md:px-16">
      <div className="bg-white flex flex-col md:flex-row justify-between my-4 shadow-lg items-center rounded-md p-4">
        <div className="flex items-center">
          <img className="h-16 w-16 md:h-20 md:w-20" src={image} alt="Product" />
          <h4 className="font-semibold text-xl md:text-3xl">Products Management</h4>
        </div>
        <div className="flex items-center cursor-pointer mt-2 md:mt-0">
          <button
            onClick={handleOpenAddProductModal}
            className="p-2 border-2 bg-gray-100 rounded-lg font-semibold"
          >
            Add New Product
          </button>
        </div>
      </div>

      <div className="shadow-lg rounded-md p-4 md:p-6 bg-white">
        <input
          type="text"
          onChange={searchHandler}
          placeholder="Search Products"
          className="w-full border-2 h-10 md:h-12 rounded-lg px-2 mb-3"
        />

        <div className="relative overflow-x-auto shadow-lg rounded-md">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="bg-gray-300 text-gray-800 uppercase">
              <tr>
                {fields.map((field, index) => (
                  <th
                    key={index}
                    className="px-3 py-3 cursor-pointer"
                    onClick={() => handleSort(field)}
                  >
                    {field.split(".")[0]}
                    {sort === field ? (sortOrder === "asc" ? "🔼" : "🔽") : ""}
                  </th>
                ))}
                <th className={cellClass}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <MotionPath />
              ) : (
                products?.map((product) => (
                  <tr key={product._id} className="border-b hover:bg-gray-100 transition">
                    {fields.map((field, index) => {
                      const value = field.split(".").reduce((a, key) => a?.[key], product);
                      return (
                        <td key={index} className={cellClass}>{value}</td>
                      );
                    })}
                    <td className={cellClass}>
                      <button
                        className="bg-blue-500 p-2 shadow-md hover:bg-blue-600 rounded-md"
                        onClick={() => handleOpenEditModal(product)}
                      >
                        <img src={EditImage} alt="Edit" />
                      </button>
                    </td>
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
        {selectedProduct && (
          <EditProductModal product={selectedProduct} onClose={handleCloseModal} />
        )}
        {isAddProductModalOpen && (
          <AddProductModal onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default ProductManagement;