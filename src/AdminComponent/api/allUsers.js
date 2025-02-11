import { sendRequest } from "../../api/sendPublicRequest";

const BASE_PATH = "/admin";

export const allUsers = (limit, page, search, sort) =>
  sendRequest(
    `${BASE_PATH}/users?limit=${limit}&page=${page}&name=${search}&sort=${sort}`,
    {
      method: "GET",
    }
  );
