import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GetAllProducts } from "../Redux/ActionsAdmin/Allproducts/productAction";
import { DeleteProduct } from "../Redux/ActionsAdmin/Allproducts/deleteProductAction";
import { updateProductDetails } from "../Redux/ActionsAdmin/Allproducts/updateProductAction";

function EditProductModal({ product, onClose }) {
  const dispatch = useDispatch();

  const [productName, setProductName] = useState(product?.name || "");
  const [price, setPrice] = useState(product?.price || "");
  const [category, setCategory] = useState(product?.category._id || "");
  const [countInStock, setCountInStock] = useState(product?.countInStock || "");

  const handleSave = async () => {
    const updatedProduct = {
      name: productName,
      price,
      countInStock,
      category,
    };
    const success = await dispatch(
      updateProductDetails(product._id, updatedProduct)
    );
    if (success) {
      dispatch(GetAllProducts(10, 1, "", "name:asc"));
      onClose();
    }
  };

  const handleDeleteProduct = (productId) => {
    const success = dispatch(DeleteProduct(productId));
    if (success) {
      dispatch(GetAllProducts(10, 1, "", "name:asc"));
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center border-b-2 pb-2">
          <h2 className="text-lg font-semibold">Edit Product Details</h2>
          <h1
            className="hover:bg-red-600 hover:text-white p-2 rounded-xl cursor-pointer"
            onClick={onClose}
          >
            ✖
          </h1>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mt-4">
            Name:
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Edit Product Name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="my-4">
          <label className="block text-sm font-medium text-gray-700 mt-4">
            Category:
          </label>
          <input
            type="text"
            value={product?.category._id}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Price:
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Edit Product Price"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Count In Stock:
          </label>
          <input
            type="number"
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
            placeholder="Edit Product Count"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={() => handleDeleteProduct(product._id)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProductModal;
