import { sendRequest } from "../../api/sendPublicRequest";

export const allProducts = (limit, page, search, sort) =>
  sendRequest(
    `/products?limit=${limit}&page=${page}&name=${search}&sort=${sort}`,
    {
      method: "GET",
    }
  );
