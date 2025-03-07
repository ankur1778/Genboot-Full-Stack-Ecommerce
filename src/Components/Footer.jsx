import React, { useEffect } from "react";
import logo from "../Images/logo.png";
import PaymentMethod from "../Images/paymentfeature.png";
import MotionPath from "./loader";
import UseAnimationFrame from "../Animations/AnimationAbout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../Redux/Actions/CategoriesAction/categoryAction";

const Footer = () => {
  const dispatch = useDispatch();
  const { loading, categories } = useSelector((state) => state.allCategories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 my-8 bg-slate-400 rounded-lg p-6 md:p-8">
      <div className="px-6 md:px-24 text-center md:text-left">
        <img className="h-[120px] md:h-[150px] mx-auto md:mx-0 mix-blend-color-burn" src={logo} alt="Logo" />
        <h3 className="text-lg font-serif mt-4">
          The customer is at the heart of our unique business model, which includes design.
        </h3>
        <img className="my-6 w-3/4 md:w-auto mx-auto md:mx-0" src={PaymentMethod} alt="Payment Methods" />
      </div>

      <div className="my-6 md:my-8 px-6 md:px-28 text-center md:text-left">
        <h1 className="text-2xl font-semibold font-serif">Shopping</h1>
        {loading ? (
          <MotionPath />
        ) : categories ? (
          categories.map((category) => (
            <div key={category?._id}>
              <Link to={`/category/${category._id}`}>
                <p className="text-lg font-serif py-2 hover:text-red-700 hover:scale-105 transition-transform">
                  {category?.name}
                </p>
              </Link>
            </div>
          ))
        ) : (
          <div className="h-20 flex items-center justify-center">
            <MotionPath />
          </div>
        )}
      </div>

      <div className="flex justify-center items-center my-6 sm:hidden md:hidden md:mt-24">
        <UseAnimationFrame />
      </div>
    </div>
  );
};

export default Footer;
