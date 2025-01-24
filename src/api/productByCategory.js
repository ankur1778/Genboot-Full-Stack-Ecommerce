import { productsByCategoryRequest } from "./sendPublicRequest";

export const productsByCategory = (categoryId) =>
  productsByCategoryRequest(`/products?categories=${categoryId}`, {
    method: "GET",
  });