import { sendRequest } from "./sendPublicRequest";

export const allProducts = (limit, search, page) =>
  sendRequest(`/products?limit=${limit}&page=${page}&name=${search}`, {
    method: "GET",
  });
