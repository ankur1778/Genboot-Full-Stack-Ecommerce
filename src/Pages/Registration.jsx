import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../Redux/Actions/Registations/registrationAction";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string().max(20, "Name must be at most 20 characters"),
    phNo: Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    email: Yup.string().email("Invalid email address"),
    password: Yup.string().min(6, "Password must be at least 6 characters"),
  });

  const handleRegisteration = async (values, { setFieldError }) => {
    try {
      const result = await dispatch(RegisterUser(values));

      if (result) {
        navigate("/login");
      }
    } catch (error) {
      setFieldError("general", "An error Occured. Please Try Again");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
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
          onSubmit={handleRegisteration}
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
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
