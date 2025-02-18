import { sendRequest } from "../../api/sendPublicRequest";

export const allProducts = (limit, page, search, sort) =>
  sendRequest(
    `/products?limit=${limit}&page=${page}&name=${search}&sort=${sort}`,
    {
      method: "GET",
    }
  );

export const updateProduct = (productId, payload) =>
  sendRequest(`/products/${productId}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

export const deleteProduct = (productId) =>
  sendRequest(`/products/${productId}`, {
    method: "DELETE",
  });
