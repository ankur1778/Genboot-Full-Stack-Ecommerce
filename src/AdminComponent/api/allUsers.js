import { sendRequest } from "../../api/sendPublicRequest";

const BASE_PATH = "/admin";

export const allUsers = () =>
  sendRequest(`${BASE_PATH}/users`, {
    method: "GET",
  });
