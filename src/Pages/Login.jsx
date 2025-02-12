import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../Redux/Actions/LoginActions/loginAction";
import { jwtdecode } from "../utils/jwt_decode";
import ToastMessage from "../utils/ToastMessage";
import { AuthMessages, ServerErrorMessage } from "../utils/statusMessages";
import BtnLoader from "../utils/btnLoader";

const Login = () => {
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);
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
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <ToastMessage message={toast.message} type={toast.type} />
      <div className="bg-[#dfa674] rounded-2xl flex max-w-3xl p-5 items-center shadow-lg">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
          <p className="text-sm mt-4 text-[#002D74]">
            If you already a member, easily log in now.
          </p>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
              <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {errors.general && (
                  <div className="text-red-600 text-sm mb-2 font-serif">
                    {errors.general}
                  </div>
                )}
                <Field
                  className="p-2 mt-8 rounded-xl border"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">{errors.email}</span>
                )}
                <div className="relative">
                  <Field
                    className="p-2 rounded-xl border w-full"
                    name="password"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    onChange={handleChange}
                    value={values.password}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                    viewBox="0 0 16 16"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                  </svg>
                </div>
                {errors.password && (
                  <span className="text-red-600 flex text-sm">
                    {errors.password}
                  </span>
                )}
                <button
                  className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isLoading ? <BtnLoader msg="Logging in..." /> : "Login"}
                </button>
              </Form>
            )}
          </Formik>
          <div className="mt-4 text-sm flex justify-between items-center">
            <p>If you don't have an account..</p>
            <button className="bg-[#002D74] text-white py-2 px-5 rounded-xl hover:border-gray-400 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300">
              <Link to="/register">Register</Link>
            </button>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl h-96"
            src="https://png.pngtree.com/thumb_back/fh260/background/20230718/pngtree-digital-retailing-illustration-laptop-keyboard-with-shopping-basket-and-e-commerce-image_3903657.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
