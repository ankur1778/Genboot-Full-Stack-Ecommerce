import { sendRequest } from "./sendPublicRequest";

const BASE_PATH = "/orders";

export const postOrder = (data) => {
  return sendRequest(`${BASE_PATH}/postorder`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const getUserOrders = () => {
  return sendRequest(`${BASE_PATH}/get/userorders`, {
    method: "GET",
  });
};
