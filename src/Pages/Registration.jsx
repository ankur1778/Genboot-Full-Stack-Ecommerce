import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../Redux/Actions/Registations/registrationAction";
import { Link, useNavigate } from "react-router-dom";
import ToastMessage from "../utils/ToastMessage";
import { AuthMessages } from "../utils/statusMessages";
import Image from "../Images/register image.jpg";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setToast({ message: AuthMessages.INVALID, type: "error" });
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-green-200 via-gray-200 to-blue-200">
      <ToastMessage message={toast.message} type={toast.type} />
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
      </div>
    </div>
  );
};

export default Registration;