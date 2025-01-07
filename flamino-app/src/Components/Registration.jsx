import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Registration = () => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(10, 'Name must be at least 10 characters'),
        phoneNumber: Yup.string()
            .required('Phone number is required')
            .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
        email: Yup.string()
            .required('Email is required')
            .email('Invalid email address'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
    })
    const handleSubmit = (values) => {
        console.log(values);
      };
    
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
  
          <Formik
            initialValues={{
              name: '',
              phoneNumber: '',
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
              </div>
  
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <Field
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="phoneNumber" component="div" className="text-red-600 text-sm mt-1" />
              </div>
  
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
              </div>
  
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                />
                <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
              </div>
  
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md"
              >
                Register
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    );
  };
export default Registration;
