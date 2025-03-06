import { sendFormDataRequest, sendRequest } from "../../api/sendPublicRequest";

const BASE_PATH = "/products";
export const allProducts = (limit, page, search, sort) =>
  sendRequest(
    `${BASE_PATH}?limit=${limit}&page=${page}&name=${search}&sort=${sort}`,
    {
      method: "GET",
    }
  );

export const updateProduct = (productId, payload) =>
  sendRequest(`${BASE_PATH}/${productId}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

export const deleteProduct = (productId) =>
  sendRequest(`${BASE_PATH}/${productId}`, {
    method: "DELETE",
  });

export const addProduct = async (payload) => {
  try {
    const response = await sendFormDataRequest(`${BASE_PATH}`, {
      method: "POST",
      body:payload
    });
    return response;
  } catch (error) {
    console.log(error, "Error while adding product");
  }
};
