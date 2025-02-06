import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component }) => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return loggedIn ? <Component /> : <Navigate to="/login" />;
};
