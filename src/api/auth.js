import allProductsRequest, { sendPublicRequest, sendRequest } from "./sendPublicRequest";

const BASE_PATH = "auth";

export const login = (data) =>
  sendPublicRequest(`${BASE_PATH}/login`, {
    body: JSON.stringify(data),
  });

export const registration = (data)=>
  sendRequest(`${BASE_PATH}/register`,{
    body: JSON.stringify(data),
  })

export const allProducts = (data)=>
  allProductsRequest(`/products`, {
    body: data
  })