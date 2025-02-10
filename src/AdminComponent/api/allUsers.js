import { sendRequest } from "../../api/sendPublicRequest";

const BASE_PATH = "/admin";

export const allUsers = (limit,page) =>
  sendRequest(`${BASE_PATH}/users?limit=${limit}&page=${page}`, {
    method: "GET",
  });
