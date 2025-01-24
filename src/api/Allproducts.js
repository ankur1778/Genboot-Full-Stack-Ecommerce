import allProductsRequest from "./sendPublicRequest";

export const allProducts = () =>
  allProductsRequest(`/products`, {
    method: "GET",
  });