import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Registration from "../Pages/Registration";
import AllProducts from "../Pages/AllProducts";
import About from "../Pages/About";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;