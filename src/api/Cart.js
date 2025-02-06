import { sendRequest } from "./sendPublicRequest";

const BASE_PATH = "/cart";

export const addItemTocart = (product) => {
  return sendRequest(`${BASE_PATH}/add-to-cart`, {
    method: "POST",
    body: JSON.stringify(product),
  });
};

export const getCart = () => {
  return sendRequest(`${BASE_PATH}/get-cart`, {
    method: "GET",
  });
};

export const removeItem = (productId) => {
  return sendRequest(`${BASE_PATH}/remove-item`, {
    method: "DELETE",
    body: JSON.stringify(productId),
  });
};

export const increaseCartItem = (productId) => {
  return sendRequest(`${BASE_PATH}/increase-quantity`, {
    method: "PUT",
    body: JSON.stringify(productId),
  });
};

export const decreaseCartItem = (productId) => {
  return sendRequest(`${BASE_PATH}/decrease-quantity`, {
    method: "PUT",
    body: JSON.stringify(productId),
  });
};
