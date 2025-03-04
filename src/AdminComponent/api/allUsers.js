import { sendRequest } from "../../api/sendPublicRequest";

const BASE_PATH = "/admin";

export const allUsers = (limit, page, search, sort) =>
  sendRequest(
    `${BASE_PATH}/users?limit=${limit}&page=${page}&name=${search}&sort=${sort}`,
    {
      method: "GET",
    }
  );

export const updateUser = (userId, payload) =>
  sendRequest(`${BASE_PATH}/users/update/${userId}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });

export const deleteUser = (userId) =>
  sendRequest(`${BASE_PATH}/users/delete/${userId}`, {
    method: "DELETE",
  });

export const disableUser = (userId, disabled) =>
  sendRequest(`${BASE_PATH}/users/update/${userId}`, {
    method: "PUT",
    body: JSON.stringify({disabled}),
  });
