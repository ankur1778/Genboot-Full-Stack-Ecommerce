import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../Redux/Actions/LoginActions/loginAction";
import { jwtdecode } from "../utils/jwt_decode";
import ToastMessage from "../utils/ToastMessage";
import { AuthMessages, ServerErrorMessage } from "../utils/statusMessages";
import Image from "../Images/Login image.jpg";
import BtnLoader from "../utils/btnLoader";

const Login = () => {
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [toast, setToast] = useState({ message: "", type: "" });

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(""),
    password: Yup.string().required(""),
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
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-green-200 via-gray-100 to-blue-200">
      <ToastMessage message={toast.message} type={toast.type} />
      <div className="bg-gradient-to-r from-gray-100 to-gray-300 rounded-2xl flex max-w-3xl p-5 items-center shadow-lg">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl  text-[#002D74]">Login</h2>
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
                  required
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
                    required
                  />
                  {showPassword ? (
                    <svg
                      onClick={() => setShowPassword((prev) => !prev)}
                      width="16"
                      height="16"
                      fill="gray"
                      className="bi bi-eye-slash absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                      viewBox="0 0 1000 1001.0101"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m462 200.456c0-15-1-30 0-46 0-24 17-41 39-41 23 0 40 18 41 41 0 31 0 62-1 93 0 8 1 12 11 13 8 0 16 3 24 5 6 2 9 0 10-6 9-29 19-57 28-86 7-22 27-34 48-28 22 6 35 27 28 50-9 30-19 60-29 90-2 7-2 10 5 13 8 3 15 8 23 12 12 7 12 7 19-5 16-25 31-49 47-74 17-25 54-23 68 4 7 14 6 28-3 41-16 26-32 53-49 79-4 5-4 9 2 13 8 6 16 12 24 20 4 4 7 4 11-1 19-22 38-44 58-65 17-19 41-22 58-6 18 16 18 40 1 58-19 23-39 45-59 67-6 6-6 10 0 18 24 27 45 56 60 90 8 16 8 32 1 49-19 42-48 77-79 110-51 55-109 101-176 135-59 29-121 47-187 44-56-2-108-17-157-43-100-51-181-126-243-220-6-9-12-19-17-29-7-15-7-30 0-45 18-36 41-67 67-97 6-7 6-10 0-16-20-22-40-44-59-67-12-14-12-32-2-47 10-14 28-21 44-16 9 3 16 9 23 16 16 20 34 38 50 58 6 7 9 6 16 0 6-6 14-12 22-18 5-4 6-7 2-12-16-25-31-50-47-75-16-26-3-56 26-62 15-4 31 4 41 18 15 24 30 49 45 73 4 7 7 7 14 3 9-5 18-10 28-15 5-2 6-4 4-10-9-29-18-57-27-86-7-22 3-45 25-52 21-7 42 4 50 27 9 28 19 56 27 84 2 7 5 8 12 7 8-3 17-4 25-5 6-1 8-3 8-9-1-16 0-32 0-49zm-193 370c0 126 101 229 224 229 131 1 233-100 233-230 0-123-103-226-226-226-128 0-230 100-231 227zm100 1c2-75 59-130 134-128 68 1 124 61 122 131-1 69-60 130-137 125-65-4-119-59-119-128z" />
                    </svg>
                  ) : (
                    <svg
                      id="Flat"
                      onClick={() => setShowPassword((prev) => !prev)}
                      width="16"
                      height="16"
                      fill="gray"
                      className="bi bi-eye-slash absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <path d="M227.42383,164.8125a3.9998,3.9998,0,1,1-6.92774,4l-20.55542-35.602a120.13387,120.13387,0,0,1-41.15942,19.102l6.4541,36.59961a4.00051,4.00051,0,0,1-3.24512,4.63379,4.06136,4.06136,0,0,1-.69921.06152,4.00171,4.00171,0,0,1-3.93457-3.30664l-6.4043-36.31738a131.58367,131.58367,0,0,1-45.99341-.01709l-6.40405,36.32178a4.00265,4.00265,0,0,1-3.93457,3.30664,4.06041,4.06041,0,0,1-.69922-.06153,4,4,0,0,1-3.24512-4.63379l6.45484-36.60986a120.1421,120.1421,0,0,1-41.11426-19.10937L35.35254,168.9707a3.9998,3.9998,0,1,1-6.92774-4l21.18067-36.68554A142.43333,142.43333,0,0,1,28.8877,107.38867a3.99986,3.99986,0,1,1,6.22265-5.02734,132.78926,132.78926,0,0,0,22.266,21.856c.03113.02636.068.04687.09815.07373C74.60583,137.4248,97.77954,148,128,148c30.19849,0,53.36011-10.56055,70.48779-23.68115.0149-.01319.03308-.02344.0481-.03614a132.77462,132.77462,0,0,0,22.35278-21.92138,3.99986,3.99986,0,1,1,6.22266,5.02734,142.41445,142.41445,0,0,1-20.75806,20.92969Z" />
                    </svg>
                  )}
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
          <img className="rounded-2xl h-96" src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
