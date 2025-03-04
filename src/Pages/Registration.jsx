// import React from "react";
// import * as Yup from "yup";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import { useDispatch } from "react-redux";
// import { RegisterUser } from "../Redux/Actions/Registations/registrationAction";
// import { Link, useNavigate } from "react-router-dom";

// const Registration = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const validationSchema = Yup.object({
//     name: Yup.string().max(20, "Name must be at most 20 characters"),
//     phNo: Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
//     email: Yup.string().email("Invalid email address"),
//     password: Yup.string().min(6, "Password must be at least 6 characters"),
//   });

//   const handleRegisteration = async (values, { setFieldError }) => {    
//     try {
//       const result = await dispatch(RegisterUser(values));

//       if (result) {
//         navigate("/login");
//       } else {
//         setFieldError("general", "Check the entered values again");
//       }
//     } catch (error) {
//       setFieldError("general", "An error Occured. Please Try Again");
//     }
//   };

//   return (
//     <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-[#dfa674] rounded-2xl flex max-w-3xl p-5 items-center shadow-lg">
//         <div className="md:block hidden w-1/2">
//           <img
//             className="rounded-2xl h-[500px]"
//             src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//             alt=""
//           />
//         </div>
//         <div className="md:w-1/2 px-8">
//           <div className="md:w-1/2 flex items-center">
//             <h2 className="font-bold text-[#002D74] text-4xl font-serif ml-2">
//               Register
//             </h2>
//           </div>
//           <Formik
//             initialValues={{
//               name: "",
//               phNo: "",
//               email: "",
//               password: "",
//             }}
//             validationSchema={validationSchema}
//             onSubmit={handleRegisteration}
//           >
//             {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
//               <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <div className="mt-7">
//                   <label
//                     htmlFor="name"
//                     className="block text-lg font-medium text-gray-700"
//                   >
//                     Name:
//                   </label>

//                   <Field
//                     className="p-2 rounded-xl border w-full mt-2"
//                     name="name"
//                     type="name"
//                     placeholder="Name"
//                     onChange={handleChange}
//                     value={values.name}
//                     required
//                   />
//                   <ErrorMessage
//                     name="name"
//                     component="div"
//                     className="text-red-600 text-sm mt-1"
//                   />
//                 </div>
//                 <div className="mt-1">
//                   <label
//                     htmlFor="phNo"
//                     className="block text-lg font-medium text-gray-700"
//                   >
//                     Phone Number:
//                   </label>
//                   <Field
//                     className="p-2 rounded-xl border w-full mt-2"
//                     name="phNo"
//                     placeholder="Phone Number"
//                     type="tel"
//                     onChange={handleChange}
//                     value={values.phNo}
//                     required
//                   />
//                   <ErrorMessage
//                     name="phNo"
//                     component="div"
//                     className="text-red-600 text-sm mt-1"
//                   />
//                 </div>
//                 <div className="mt-1">
//                   <label
//                     htmlFor="email"
//                     className="block text-lg font-medium text-gray-700"
//                   >
//                     Email:
//                   </label>
//                   <Field
//                     className="p-2 rounded-xl border w-full mt-2"
//                     name="email"
//                     placeholder="Email"
//                     type="email"
//                     onChange={handleChange}
//                     value={values.email}
//                     required
//                   />
//                   <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="text-red-600 text-sm mt-1"
//                   />
//                 </div>
//                 <div className="relative">
//                   <div className="mt-1">
//                     <label
//                       htmlFor="password"
//                       className="block text-lg font-medium text-gray-700"
//                     >
//                       Password:
//                     </label>
//                     <Field
//                       className="p-2 rounded-xl border w-full"
//                       name="password"
//                       placeholder="Password"
//                       type="password"
//                       onChange={handleChange}
//                       value={values.password}
//                       required
//                     />
//                   </div>
//                   <ErrorMessage
//                     name="password"
//                     component="div"
//                     className="text-red-600 text-sm mt-1"
//                   />
//                 </div>
//                 <button
//                   className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
//                   type="submit"
//                   disabled={isSubmitting}
//                 >
//                   Register
//                 </button>
//                 <div className="mt-4 text-sm flex items-center">
//                   <p>Already have an account ?</p>
//                   <Link to="/login">
//                     <p className="underline text-[#002D74] ml-2">Login</p>
//                   </Link>
//                 </div>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;





import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../Redux/Actions/Registations/registrationAction";
import { Link, useNavigate } from "react-router-dom";
import ToastMessage from "../utils/ToastMessage";
import { AuthMessages } from "../utils/statusMessages";
import Image from "../Images/register image.jpg";
import BtnLoader from "../utils/btnLoader";

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
      /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Must Contain 8 Characters"
    ),
  });

  const handleRegisteration = async (values) => {
    const result = await dispatch(RegisterUser(values));
    console.log(values);

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
                type="submit"
                disabled={isSubmitting || isLoading}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md flex items-center justify-center"
              >
                {isLoading ? <BtnLoader msg="Registering..." /> : "Register"}
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