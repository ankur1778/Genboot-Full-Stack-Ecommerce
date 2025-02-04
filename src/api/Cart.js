import {
  addItemToCartRequest,
  decreaseCartItemRequest,
  getUserCartRequest,
  increaseCartItemRequest,
  removeItemFromCartRequest,
} from "./CartRequest";

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

export const removeItem = (productId) => {
  return removeItemFromCartRequest(`${BASE_PATH}/remove-item`, {
    method: "DELETE",
    body: JSON.stringify(productId),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const increaseCartItem = (productId) => {
  return increaseCartItemRequest(`${BASE_PATH}/increase-quantity`, {
    method: "PUT",
    body: JSON.stringify(productId),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const decreaseCartItem = (productId) => {
  return decreaseCartItemRequest(`${BASE_PATH}/decrease-quantity`, {
    method: "PUT",
    body: JSON.stringify(productId),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
