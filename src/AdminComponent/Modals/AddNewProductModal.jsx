import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { AddProduct } from "../Redux/ActionsAdmin/Allproducts/addProductActions";
import ToastMessage from "../../utils/ToastMessage";
import { ErrorMessage, Field, Form, Formik } from "formik";
import BtnLoader from "../../utils/btnLoader";
import { getAllCategories } from "../../Redux/Actions/CategoriesAction/categoryAction";
import { ProductMessages } from "../../utils/statusMessages";

export default function AddProductModal({ onClose }) {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.addProduct);
  const { categories } = useSelector((state) => state.allCategories);
  const [toast, setToast] = useState({ message: "", type: "" });

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const validationSchema = Yup.object({
    id: Yup.string()
      .matches(/^\d+$/, "ID must be a number")
      .required("ID is required"),
    name: Yup.string()
      .max(40, "Name must be at most 40 characters")
      .required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .positive("Price must be positive")
      .required("Price is required"),
    countInStock: Yup.number()
      .typeError("Stock count must be a number")
      .integer("Stock count must be an integer")
      .min(10, "Stock count must be at least 10")
      .required("Stock count is required"),
    rating: Yup.number()
      .typeError("Rating must be a number")
      .min(0, "Rating cannot be negative")
      .max(5, "Rating cannot exceed 5"),
    category: Yup.string().required("Category is required"),
    image: Yup.mixed().test(
      "fileType",
      "Only JPEG, JPG, and PNG are allowed",
      (value) =>
        !value ||
        (value &&
          ["image/jpeg", "image/png", "image/jpg"].includes(value?.type))
    ),
  });

  const handleAddProduct = async (values, { resetForm }) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        formData.append(key, values[key]);
      }
    });
    try {
      const response = await dispatch(AddProduct(formData));
      if (response?.success) {
        setToast({ message: ProductMessages.ADDED, type: "success" });
        resetForm();
        onClose();
      } else {
        setToast({
          message: ProductMessages.FAILED,
          type: "error",
        });
        onClose();
      }
    } catch (error) {
      setToast({ message: ProductMessages.FAILED, type: "error" });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      {toast.message && (
        <ToastMessage message={toast.message} type={toast.type} />
      )}
      <div className="bg-white rounded-lg shadow-lg p-6 w-[600px] max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b-2 pb-2">
          <h2 className="text-lg font-semibold">Enter Product Details</h2>
          <button
            className="hover:bg-red-600 hover:text-white p-2 rounded-xl cursor-pointer"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        <Formik
          initialValues={{
            id: "",
            name: "",
            description: "",
            price: "",
            countInStock: "",
            rating: "",
            category: "",
            image: null,
          }}
          validationSchema={validationSchema}
          onSubmit={handleAddProduct}
        >
          {({ setFieldValue }) => (
            <Form className="p-4 flex flex-col">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "id",
                  "name",
                  "description",
                  "price",
                  "countInStock",
                  "rating",
                ].map((field) => (
                  <div key={field} className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 capitalize">
                      {field.replace(/([A-Z])/g, " $1")}
                    </label>
                    <Field
                      name={field}
                      as={field === "description" ? "textarea" : "input"}
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name={field}
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <label className="block font-semibold">Category:</label>
                <Field
                  as="select"
                  name="category"
                  className="w-full border-2 rounded-lg px-2 py-1"
                >
                  <option value="">Select a Category</option>
                  {categories?.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Image
                </label>
                <input
                  type="file"
                  onChange={(e) => setFieldValue("image", e.target.files[0])}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-40 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md flex justify-center"
                >
                  {isLoading ? <BtnLoader msg="Adding..." /> : "Add"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
