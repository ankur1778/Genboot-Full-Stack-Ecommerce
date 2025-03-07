import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Registration from "../Pages/Registration";
import AllProducts from "../Pages/AllProducts";
import About from "../Pages/About";
import ProductsByCategories from "../Pages/productsByCategories";
import { AdminRoute, PrivateRoute } from "./PrivateRoute";
import AdminDashboard from "../AdminComponent/AdminDashboard";
import Cart from "../Pages/Cart";
import SingleProductPage from "../Pages/SingleProductPage";
import CheckoutPage from "../Pages/CheckoutPage";
import AllOrdersPage from "../Pages/AllOrdersPage";
import Wishlists from "../Pages/Wishlists";
import ProfilePage from "../Pages/ProfilePage";
import Logout from "../Pages/Logout";
import Payment from "../Pages/Payment";
import PaymentsSuccess from "../Pages/PaymentSuccess";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<PrivateRoute Component={Home} />} />
          <Route
            path="/all-products"
            element={<PrivateRoute Component={AllProducts} />}
          />
          <Route path="/about" element={<PrivateRoute Component={About} />} />
          <Route path="/cart" element={<PrivateRoute Component={Cart} />} />
          <Route
            path="/category/:categoryId"
            element={<PrivateRoute Component={ProductsByCategories} />}
          />
          <Route
            path="/admin-dashboard"
            element={<AdminRoute Component={AdminDashboard} />}
          />
          <Route
            path="/product/:productId"
            element={<PrivateRoute Component={SingleProductPage} />}
          />
          <Route
            path="/cart/checkout"
            element={<PrivateRoute Component={CheckoutPage} />}
          />
          <Route
            path="/your-orders"
            element={<PrivateRoute Component={AllOrdersPage} />}
          />
          <Route
            path="/wishlists"
            element={<PrivateRoute Component={Wishlists} />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute Component={ProfilePage} />}
          />
          <Route
            path="/payment-method"
            element={<PrivateRoute Component={Payment} />}
          />
          <Route
            path="/payment-success"
            element={<PrivateRoute Component={PaymentsSuccess} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
