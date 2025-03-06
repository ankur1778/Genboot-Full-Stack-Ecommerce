import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { jwtdecode } from "../utils/jwt_decode";

export const PrivateRoute = ({ Component }) => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return loggedIn ? <Component /> : <Navigate to="/login" />;
};


export const AdminRoute = ({ Component }) => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const decodedToken = jwtdecode();

  if (!loggedIn || !decodedToken) {
    return <Navigate to="/login" />;
  }

  const role = decodedToken.roleId;
  
  if (role !== process.env.REACT_APP_ROLE_ADMIN) {
    return <Navigate to="/" />;
  }

  return <Component />;
};
