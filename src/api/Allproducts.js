import { allProductsRequest } from "../AdminComponent/api/sendRequests";

export const allProducts = () =>
  allProductsRequest(`/products`, {
    method: "GET",
  });