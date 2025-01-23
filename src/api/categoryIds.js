import { categoryIdRequest } from "./sendPublicRequest";

export const getCategories = () =>
    categoryIdRequest("/categories", {
      method: "GET",
    });