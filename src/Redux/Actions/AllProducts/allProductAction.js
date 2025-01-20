import axios from "axios";
import Cookies from "js-cookie";
import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
} from "./allProductsActionType";

export const getAllProductsRequest = () => ({
  type: GET_ALL_PRODUCTS_REQUEST,
});

export const getAllProductsSuccess = (products) => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload: { products },
});

export const getAllProductsFailure = (error) => ({
  type: GET_ALL_PRODUCTS_FAILURE,
  payload: error,
});

export const getAllProducts = (limit, page) => {
  const token = Cookies.get("token");
  const roleId = Cookies.get("roleId");

  if (!token) {
    console.error("No token found");
    return;
  }

  return async (dispatch) => {
    dispatch(getAllProductsRequest());

    try {
      const res = await axios.get(
        `http://localhost:3100/products?limit=${limit}&page=${page}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            roleId: roleId,
          },
        }
      );
      const products = res.data;
      console.log(products);
      
      dispatch(getAllProductsSuccess(products));
      return true;
    } catch (error) {
      console.error(error.message);
      dispatch(getAllProductsFailure(error));
      return false;
    }
  };
};
