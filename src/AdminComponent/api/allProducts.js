import { sendRequest } from "../../api/sendPublicRequest";

export const allProducts = () =>
  sendRequest(`/products`, {
    method: "GET",
  });
