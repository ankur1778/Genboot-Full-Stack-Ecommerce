import { allOrdersRequest} from "./sendRequests";

export const allOrders = () =>
  allOrdersRequest(`/get-all-orders/`, {
    method: "GET",
  });
