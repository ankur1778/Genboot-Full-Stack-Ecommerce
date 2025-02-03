import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Registration from "../Pages/Registration";
import AllProducts from "../Pages/AllProducts";
import About from "../Pages/About";
import ProductsByCategories from "../Pages/productsByCategories";
import { PrivateRoute } from "./PrivateRoute";
import AdminDashboard from "../AdminComponent/AdminDashboard";
import Cart from "../Pages/Cart";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<PrivateRoute Component={Home} />} />
          <Route path="/all-products" element={<PrivateRoute Component={AllProducts} />} />
          <Route path="/about" element={<PrivateRoute Component={About} />} />
          <Route path="/cart" element={<PrivateRoute Component={Cart} />} />
          <Route path="/category/:categoryId" element={<PrivateRoute Component={ProductsByCategories} />} />
          <Route path="/admin-dashboard" element={<PrivateRoute Component={AdminDashboard} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;