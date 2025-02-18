import React, { useState } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../../Redux/Actions/Registations/registrationAction";
import { AuthMessages } from "../../utils/statusMessages";
import ToastMessage from "../../utils/ToastMessage";
import { ErrorMessage, Field, Form, Formik } from "formik";
import BtnLoader from "../../utils/btnLoader";
import { UserAction } from "../Redux/ActionsAdmin/AllUsers/userAction";

function AddUserModal({ onClose }) {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.register);
  const [toast, setToast] = useState({ message: "", type: "" });

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(20, "Name must be at most 20 characters")
      .required("Name is required"),
    phNo: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleRegistration = async (values, { resetForm }) => {
    const result = await dispatch(RegisterUser(values));

    if (result.success) {
      setToast({ message: AuthMessages.REGISTERED, type: "success" });
      resetForm();
      await dispatch(UserAction(10, 1, "", "name:asc"));
      onClose();
    } else {
      setToast({ message: AuthMessages.INVALID, type: "error" });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <ToastMessage message={toast.message} type={toast.type} />

      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center border-b-2 pb-2">
          <h2 className="text-lg font-semibold">Enter User Details</h2>
          <h1
            className="hover:bg-red-600 hover:text-white p-2 rounded-xl cursor-pointer"
            onClick={onClose}
          >
            x
          </h1>
        </div>

        <Formik
          initialValues={{ name: "", phNo: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleRegistration}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="p-4">
              {["name", "phNo", "email", "password"].map((field, index) => (
                <div key={index} className="mb-4">
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 capitalize"
                  >
                    {field}
                  </label>
                  <Field
                    id={field}
                    name={field}
                    type={field === "password" ? "password" : "text"}
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage
                    name={field}
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
              ))}

              <div className="flex justify-end mt-4">
                <button
                  onClick={onClose}
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md flex items-center justify-center"
                >
                  {isLoading ? <BtnLoader msg="Registering..." /> : "Register"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddUserModal;
