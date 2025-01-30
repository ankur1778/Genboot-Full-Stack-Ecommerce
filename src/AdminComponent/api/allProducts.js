import { allProductsRequest } from "./sendRequests";

export const allProducts = () =>
  allProductsRequest(`/products`, {
    method: "GET",
  });
