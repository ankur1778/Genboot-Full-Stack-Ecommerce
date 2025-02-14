import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../Redux/Actions/Registations/registrationAction";
import { useNavigate } from "react-router-dom";
import ToastMessage from "../utils/ToastMessage";
import { AuthMessages } from "../utils/statusMessages";
<<<<<<< HEAD
import Image from "../Images/register image.jpg";
=======
import BtnLoader from "../utils/btnLoader";
>>>>>>> 9b97932a67b2d5efa7d3477e5dc69dc0c976b950

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.register);
  const [toast, setToast] = useState({ message: "", type: "" });

  const validationSchema = Yup.object({
    name: Yup.string().max(20, "Name must be at most 20 characters"),
    phNo: Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    email: Yup.string().email("Invalid email address"),
    password: Yup.string().matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  });

  const handleRegisteration = async (values, { setFieldError }) => {
    const result = await dispatch(RegisterUser(values));

    if (result.success) {
      setToast({ message: AuthMessages.REGISTERED, type: "success" });
      navigate("/login");
    } else {
      setToast({ message: AuthMessages.INVALID, type: "error" });
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-green-200 via-gray-200 to-blue-200">
      <ToastMessage message={toast.message} type={toast.type} />
<<<<<<< HEAD
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex  max-h-2xl p-1 items-center shadow-xl">
        <div className="md:block hidden">
          <img className="rounded-2xl h-96 p-4" src={Image} alt="" />
        </div>
        <div className="md:w-2/3 px-8">
          <div className="md:w-2/3 flex items-center mt-4">
            <h2 className="font-bold text-3xl  text-[#002D74]">Register</h2>
          </div>
          <Formik
            initialValues={{
              name: "",
              phNo: "",
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleRegisteration}
          >
            {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
              <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="mt-4">
                  <Field
                    className="p-2 rounded-xl border w-full mt-2"
                    name="name"
                    type="name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={values.name}
                    required
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    className="p-2 rounded-xl border w-full"
                    name="phNo"
                    placeholder="Phone Number"
                    type="tel"
                    onChange={handleChange}
                    value={values.phNo}
                    required
                  />
                  <ErrorMessage
                    name="phNo"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    className="p-2 rounded-xl border w-full"
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={handleChange}
                    value={values.email}
                    required
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <div className="relative">
                  <div>
                    <Field
                      className="p-2 rounded-xl border w-full"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={handleChange}
                      value={values.password}
                      required
                    />
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <button
                  className="bg-[#002D74] w-2/3 mt-3 text-white py-2 text-xl rounded-3xl font-serif hover:scale-105 duration-300 hover:bg-[#206ab1] font-bold"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Register
                </button>
                <div className="mt-4 text-sm flex items-center">
                  <p>Already have an account ?</p>
                  <Link to="/login">
                    <p className="underline text-[#002D74] ml-2">Login</p>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
=======
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <Formik
          initialValues={{
            name: "",
            phNo: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleRegistration}
        >
          {({ handleSubmit, handleChange, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Field
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  required
                  type="text"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phNo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <Field
                  id="phNo"
                  required
                  onChange={handleChange}
                  value={values.phNo}
                  name="phNo"
                  type="tel"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="phNo"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  required
                  onChange={handleChange}
                  value={values.email}
                  type="email"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  required
                  type="password"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isLoading}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md flex items-center justify-center"
              >
                {isLoading ? <BtnLoader msg="Registering..." /> : "Register"}
              </button>
            </Form>
          )}
        </Formik>
>>>>>>> 9b97932a67b2d5efa7d3477e5dc69dc0c976b950
      </div>
    </div>
  );
};

export default Registration;