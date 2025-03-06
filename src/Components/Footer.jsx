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
    <div className="grid grid-cols-3 my-8  bg-slate-400 rounded-lg">
      <div className="px-24">
        <img className="h-[150px] mix-blend-color-burn" src={logo} alt="Load" />
        <h3 className=" items-center text-justify text-lg font-serif ">
          The customer is at the heart of our unique business model, which
          includes design.
        </h3>
        <img className="my-8" src={PaymentMethod} alt="load" />
      </div>
      <div className="my-8 px-28">
        <h1 className="text-2xl font-semibold font-serif">Shopping</h1>
        {loading ? (
          <MotionPath />
        ) : categories ? (
          categories.map((category) => (
            <div key={category?._id}>
              <Link to={`/category/${category._id}`}>
                <div>
                  <p className="text-lg font-serif py-2 hover:text-red-700 hover:scale-105">
                    {category?.name}
                  </p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="h-20 items-center flex justify-center">
            <MotionPath />
          </div>
        )}
      </div>
      <div className="flex justify-center items-center mt-24">
        <UseAnimationFrame />
      </div>
    </div>
  );
};

export default Footer;
