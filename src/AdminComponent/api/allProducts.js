import { sendRequest } from "../../api/sendPublicRequest";

export const allProducts = (limit, page) =>
  sendRequest(`/products?limit=${limit}&page=${page}`, {
    method: "GET",
  });
