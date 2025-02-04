import { addItemToCartRequest, getUserCartRequest } from "./CartRequest";

const BASE_PATH = "/cart";

export const addItemTocart = (product) => {
  return addItemToCartRequest(`${BASE_PATH}/add-to-cart`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getCart = () => {
  return getUserCartRequest(`${BASE_PATH}/get-cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
