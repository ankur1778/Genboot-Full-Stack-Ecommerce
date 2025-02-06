import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../Redux/Actions/CartAction/getCartAction";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { PostOrder } from "../Redux/Actions/OrderActions/postOrderAction";
import { useNavigate } from "react-router-dom";
import MotionPath from "../Components/loader";
import ToastMessage from "../utils/ToastMessage";
import { OrderMessage, ProductMessages } from "../utils/statusMessages";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { item, isLoading, isError } = useSelector((state) => state.getCart);
  const [toast, setToast] = useState({ message: "", type: "" });
  const [orderItems, setOrderItems] = useState([]);
  const calculateTotal = () => {
    return item.reduce(
      (total, currentItem) =>
        total + currentItem.product.price * currentItem.quantity,
      0
    );
  };
  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  useEffect(() => {
    if (item) {
      setOrderItems(
        item.map((cartItem) => ({
          quantity: cartItem.quantity,
          product: cartItem.product._id,
        }))
      );
    }
  }, [item]);

  const validationSchema = Yup.object({
    shippingAddress1: Yup.string().required("Shipping Address 1 is required"),
    shippingAddress2: Yup.string(),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone is required"),
    zip: Yup.string()
      .matches(/^[0-9]{6}$/, "Zip code must be 6 digits")
      .required("Zip is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
  });

  const handlePostOrder = async (values, { setFieldError }) => {
    try {
      const orderData = { ...values, orderItems };
      const order = await PostOrder(orderData);
      if (order.success) {
        setToast({ message: OrderMessage.PLACED, type: "success" });
        navigate("/your-orders");
      }
    } catch (error) {
      setToast({ message: OrderMessage.NOT_PLACED, type: "error" });
    }
  };

  if (isError) {
    <ToastMessage message={ProductMessages.NOT_FOUND} />;
  }
  return (
    <>
      <Navbar />
      <div className="w-screen flex justify-center items-center bg-[#EAEDED]">
        <ToastMessage message={toast.message} type={toast.type} />
        <div className="px-8 py-4 shadow-lg rounded-2xl border bg-white w-[90%] max-w-4xl">
          <div className="bg-gray-50 mt-4 p-4 rounded-md">
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold mb-3">Items:</h2>
              <span className="ml-auto">
                <p className="font-bold">Total :</p> ₹
                {(calculateTotal() + 6).toFixed(2)}
              </span>
            </div>
            {isLoading ? (
              <MotionPath />
            ) : (
              item?.map((item) => (
                <div
                  key={item._id}
                  className="border-b last:border-b-0 py-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-24 h-24 shrink-0 bg-gray-200 p-2 rounded-md">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>

                    <div>
                      <p className="text-gray-800 font-medium text-lg">
                        {item.product.name}
                      </p>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {item.product.description}
                      </p>
                      <p className="text-gray-900 font-semibold mt-1">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-900 text-lg font-semibold">
                    ₹{item.product.price}
                  </p>
                </div>
              ))
            )}
          </div>

          <Formik
            initialValues={{
              orderItems: orderItems,
              shippingAddress1: "",
              shippingAddress2: "",
              city: "",
              state: "",
              zip: "",
              country: "",
              phone: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handlePostOrder}
          >
            {({ handleChange, handleSubmit, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="shippingAddress1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Shipping Address 1
                  </label>
                  <Field
                    id="shippingAddress1"
                    name="shippingAddress1"
                    onChange={handleChange}
                    value={values.shippingAddress1}
                    required
                    type="text"
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="shippingAddress1"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="shippingAddress2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Shipping Address 2
                  </label>
                  <Field
                    id="shippingAddress2"
                    name="shippingAddress2"
                    onChange={handleChange}
                    value={values.shippingAddress2}
                    type="text"
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="shippingAddress2"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <Field
                    id="phone"
                    required
                    onChange={handleChange}
                    value={values.phone}
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
                  <div className="mb-4">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <Field
                      id="city"
                      name="city"
                      required
                      onChange={handleChange}
                      value={values.city}
                      type="text"
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="ZIP"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Zip
                    </label>
                    <Field
                      id="zip"
                      name="zip"
                      onChange={handleChange}
                      value={values.zip}
                      required
                      type="text"
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="zip"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
                  <div className="mb-4">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                    <Field
                      id="state"
                      name="state"
                      onChange={handleChange}
                      value={values.state}
                      required
                      type="text"
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <Field
                      id="country"
                      name="country"
                      required
                      onChange={handleChange}
                      value={values.country}
                      type="text"
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="country"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md"
                >
                  Post Order
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
