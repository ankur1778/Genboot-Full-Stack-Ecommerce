import { sendRequest } from "../../api/sendPublicRequest";
const BASE_PATH = "/orders";

export const allOrders = (limit,page) =>
  sendRequest(`${BASE_PATH}/get-all-orders?limit=${limit}&page=${page}`, {
    method: "GET",
  });

export const specificOrderDetails = (orderId) =>
  sendRequest(`${BASE_PATH}/specificorder/${orderId}`, {
    method: "GET",
  });

  export const updateOrderStatus = async (orderId, status) => {
    try {

      const response = await sendRequest(`${BASE_PATH}/updatestatus/${orderId}`, {
        method: "PUT",
        body: JSON.stringify({ status }),
      });
      return response;
    } catch (error) {
      throw new Error("Failed to update order status: " + error.message);
    }
  };
  
