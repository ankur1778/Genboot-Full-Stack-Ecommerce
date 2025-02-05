import { sendRequest } from "./sendPublicRequest";

export const productsByCategory = (categoryId) =>
  sendRequest(`/products?categories=${categoryId}`, {
    method: "GET",
  });