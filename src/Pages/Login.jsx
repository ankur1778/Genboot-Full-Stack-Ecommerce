import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginUser } from "../Redux/Actions/LoginActions/loginAction";
import { jwtdecode } from "../utils/jwt_decode";
import ToastMessage from "../utils/ToastMessage";
import { AuthMessages, ServerErrorMessage } from "../utils/statusMessages";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [toast, setToast] = useState({ message: "", type: "" });

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = async (values) => {
    try {
      const result = await dispatch(LoginUser(values));
      if (result.success) {
        setToast({ message: AuthMessages.LOGGED, type: "success" });

        const decodedToken = jwtdecode();
        if (decodedToken) {
          const role = decodedToken.roleId;
          if (role === process.env.REACT_APP_ROLE_ADMIN) {
            navigate("/admin-dashboard");
          } else {
            setToast({ message: AuthMessages.INVALID, type: "error" });

            navigate("/");
          }
        }
      }
    } catch (error) {
      <ToastMessage message={ServerErrorMessage.SERVER_ERROR} />;
    }
  };

  useEffect(() => {
    const decodedToken = jwtdecode();
    if (decodedToken) {
      const role = decodedToken.roleId;
      if (role === process.env.REACT_APP_ROLE_ADMIN) {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }
    }
  }, [navigate]);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 ">
      <ToastMessage message={toast.message} type={toast.type} />
      <div className="px-12 py-4 shadow-lg rounded-md justify-center border-2 max-w-[1000px] bg-white">
        <h1 className="font-bold text-2xl text-center mt-2 mb-4">Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              {errors.general && (
                <div className="text-red-600 text-sm mb-2 font-serif">
                  {errors.general}
                </div>
              )}
              <div className="mb-4">
                <label className="block font-medium text-gray-700">Email</label>
                <Field
                  className="mt-2 flex border-2 border-gray-300 rounded-md items-center p-2 h-10 w-60"
                  name="email"
                  required
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">{errors.email}</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-medium text-gray-700">
                  Password
                </label>
                <Field
                  className="mt-2 flex border-2 border-gray-300 rounded-md items-center p-2 h-10 w-60"
                  name="password"
                  required
                  placeholder="Enter Password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password && (
                  <span className="text-red-600 flex text-sm">
                    {errors.password}
                  </span>
                )}
                <label className="block font-medium text-gray-700 p-2">
                  <input
                    type="checkbox"
                    className="mt-4 me-2"
                    checked={showPassword}
                    onChange={() => setShowPassword((prev) => !prev)}
                  />
                  Show Password
                </label>
              </div>
              <div>
                <button
                  className="w-full p-2 bg-blue-500 text-white text-center items-center font-bold text-2xl rounded-md my-4 hover:bg-blue-600"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Login;
