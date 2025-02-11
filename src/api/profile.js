import { allUsersRequest } from "../AdminComponent/api/sendRequests";

const BASE_PATH = '/admin'

export const allUsers = (userId) =>
  allUsersRequest(`${BASE_PATH}/users/${userId}`, {
    method: "GET",
  });