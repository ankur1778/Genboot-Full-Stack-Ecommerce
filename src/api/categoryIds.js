import { sendRequest } from "./sendPublicRequest";

export const getCategories = () =>
  sendRequest("/categories", {
    method: "GET",
  });
