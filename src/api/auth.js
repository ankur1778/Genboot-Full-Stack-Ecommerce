import { sendPublicRequest } from "./sendPublicRequest";

const BASE_PATH = "/auth";

export const login = (data) =>
  sendPublicRequest(`${BASE_PATH}/login`, {
    body: JSON.stringify(data),
  });

export const registration = (data) => {
  try {   
    return sendPublicRequest(`${BASE_PATH}/register`, {
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error, "I am error");
  }
};
