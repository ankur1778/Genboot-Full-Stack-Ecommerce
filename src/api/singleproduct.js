import { singleProductRequest} from "./sendPublicRequest";

export const productsByCategory = (productId) =>
  singleProductRequest(`/products?products=${productId}`, {
    method: "GET",
  });