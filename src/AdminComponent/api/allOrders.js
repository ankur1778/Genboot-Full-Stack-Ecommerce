import { sendRequest } from "../../api/sendPublicRequest";

export const allOrders = () =>
  sendRequest(`/get-all-orders/`, {
    method: "GET",
  });
