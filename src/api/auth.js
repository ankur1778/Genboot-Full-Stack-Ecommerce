import  {sendPublicRequest}  from "./sendPublicRequest";

const BASE_PATH = "auth";
// localhost:3100/auth/login


export const login = (data) =>
    sendPublicRequest(`${BASE_PATH}/login`, {
      body: JSON.stringify(data),
    });
  