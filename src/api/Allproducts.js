import { sendRequest } from "./sendPublicRequest";

export const allProducts = () =>
  sendRequest(`/products`, {
    method: "GET",
  });