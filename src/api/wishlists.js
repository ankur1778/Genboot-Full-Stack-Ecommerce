import { sendRequest } from "./sendPublicRequest";

const BASE_PATH = "/wishlist";

export const addToWishlists = (product) => {
  return sendRequest(`${BASE_PATH}/add-to-wishlist`, {
    method: "POST",
    body: JSON.stringify(product),
  });
};

export const getWishlists = () => {
  return sendRequest(`${BASE_PATH}/get-wishlist`, {
    method: "GET",
  });
};

export const removeFromWishlists = (product) => {
  return sendRequest(`${BASE_PATH}/remove-from-wishlist`, {
    method: "DELETE",
    body: JSON.stringify(product),
  });
};
