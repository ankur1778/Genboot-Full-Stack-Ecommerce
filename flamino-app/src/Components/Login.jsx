import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();
  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const payload = {
        email: values.email,
        password: values.password,
      };
      const response = await fetch('https://811f-2405-201-5023-4855-988f-9067-2c7b-c77d.ngrok-free.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        console.log("Errors");
        return;
      }
      console.log(response);

      const data = await response.json();
      console.log(data, 'Login Success');
      if (data.token) {
        localStorage.setItem('token', data.token);
        // navigate("/")
      } else {
        console.log("Errors");
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 ">
      <div className="px-12 py-4 shadow-lg rounded-lg justify-center border-2 max-w-[1000px] bg-white">
        <h1 className="font-bold text-2xl text-center mt-2 mb-4">Login</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          // validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              {errors.general && (
                <div className="text-red-600 text-sm mb-2 font-serif">{errors.general}</div>
              )}
              <div className="mb-4">
                <label className="block font-medium text-gray-700">Email</label>
                <Field
                  className="mt-2 flex border-2 border-gray-300 rounded-2xl items-center p-2 h-10 w-60"
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
                <label className="block font-medium text-gray-700">Password</label>
                <Field
                  className="mt-2 flex border-2 border-gray-300 rounded-2xl items-center p-2 h-10 w-60"
                  name="password"
                  required
                  placeholder="Enter Password"
                  type={showPassword ? 'text' : 'password'}
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password && (
                  <span className="text-red-600 flex text-sm">{errors.password}</span>
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
                  disabled={isSubmitting} >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
};
export default Login;