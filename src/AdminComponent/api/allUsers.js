import { allUsersRequest } from "./sendRequests";

const BASE_PATH = '/admin'

export const allUsers = () =>
  allUsersRequest(`${BASE_PATH}/users`, {
    method: "GET",
  });