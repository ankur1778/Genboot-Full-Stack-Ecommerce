import { ProductMessages } from "../utils/statusMessages";
import ToastMessage from "../utils/ToastMessage";
import { sendRequest } from "./sendPublicRequest";

export const SingleProduct = async (productId) => {
  try {
    const product = await sendRequest(`/products/${productId}`, {
      // Ensure you're awaiting here
      method: "GET",
    });
    return product; // Return the resolved product data
  } catch (error) {
    <ToastMessage message={ProductMessages.NOT_FETCH} />;
    throw error; // Throw error to propagate it
  }
};
