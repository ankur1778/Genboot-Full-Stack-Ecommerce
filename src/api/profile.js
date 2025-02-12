import { sendRequest } from "./sendPublicRequest";

const BASE_PATH = '/admin'

export const allUsers = (userId) =>
  sendRequest(`${BASE_PATH}/users/${userId}`, {
    method: "GET",
  });