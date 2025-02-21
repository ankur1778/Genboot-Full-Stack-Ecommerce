import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
const Payment = () => {
  const initialValues = {
    paymentMethod: "",
  };
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/payments-success");
    localStorage.removeItem("cart");
  };
  const validationSchema = yup.object({
    paymentMethod: yup.string().required("Choose any one Method of Payment"),
  });
  return (
    <div>
      <Navbar />
      <div className="max-w-lg mx-auto my-4 p-6 bg-gray-200 rounded-lg shadow-md">
        <h2 className="font-bold uppercase text-center font-serif mb-6 bg-blue-300 text-white p-3 text-2xl">
          Payment Page
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-4">
            <div>
              <label className="block text-xl font-bold uppercase text-gray-900 font-serif text-center">
                Choose Payment Option
              </label>
              <div className="mt-5 space-y-5 w-full h-96 rounded-md bg-gray-400 items-center ">
                <label className="flex items-center font-serif text-white text-xl text-center p-2">
                  <Field
                    type="radio"
                    name="paymentMethod"
                    value="creditcard"
                    className="mr-2 mt-6"
                  />
                  <img
                    className="w-20 h-20 mt-6"
                    src="https://static.vecteezy.com/system/resources/previews/000/357/048/non_2x/vector-credit-card-icon.jpg"
                    alt=""
                  />
                  Credit Card
                </label>
                <label className="flex items-center font-serif text-xl text-white text-center p-2">
                  <Field
                    type="radio"
                    name="paymentMethod"
                    value="Google pay"
                    className="mr-2"
                  />
                  <img
                    className="w-20 h-20"
                    src="https://static.vecteezy.com/system/resources/previews/044/626/012/non_2x/white-google-pay-logotype-on-light-blue-background-logo-mobile-payment-system-electronic-wallet-contactless-nfc-for-android-operating-system-gpay-editorial-free-vector.jpg"
                    alt=""
                  />
                  Google Pay
                </label>
                <label className="flex items-center font-serif text-xl text-white text-center p-2">
                  <Field
                    type="radio"
                    name="paymentMethod"
                    value="COD"
                    className="mr-2"
                  />
                  <img
                    className="w-24 h-24"
                    src="https://cdn-icons-png.flaticon.com/512/9198/9198191.png"
                    alt=" "
                  />
                  Cash on Delivery
                </label>
              </div>
              <ErrorMessage
                name="paymentMethod"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="border-2 hover:text-3xl hover:text-gray-600 hover:bg-slate-50 font-serif border-gray-500 bg-gray-500 text-white rounded-md px-5 text-2xl text-center items-center"
              >
                <Link to="/payment-success">Submit</Link>
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Payment;
