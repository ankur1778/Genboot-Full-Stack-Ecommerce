import { sendRequest } from "./sendPublicRequest";

const BASE_PATH = "/cart";

export const addItemTocart = (product) => {
  return sendRequest(`${BASE_PATH}/add-to-cart`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getCart = () => {
  return sendRequest(`${BASE_PATH}/get-cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const removeItem = (productId) => {
  return sendRequest(`${BASE_PATH}/remove-item`, {
    method: "DELETE",
    body: JSON.stringify(productId),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const increaseCartItem = (productId) => {
  return sendRequest(`${BASE_PATH}/increase-quantity`, {
    method: "PUT",
    body: JSON.stringify(productId),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const decreaseCartItem = (productId) => {
  return sendRequest(`${BASE_PATH}/decrease-quantity`, {
    method: "PUT",
    body: JSON.stringify(productId),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
