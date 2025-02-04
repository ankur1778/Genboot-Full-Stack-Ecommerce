import { singleProductRequest } from "./sendPublicRequest";

export const SingleProduct = async (productId) => {
  try {
    const product = await singleProductRequest(`/products/${productId}`, {  // Ensure you're awaiting here
      method: "GET",
    });
    return product;  // Return the resolved product data
  } catch (error) {
    console.error("Error fetching product: ", error);
    throw error;  // Throw error to propagate it
  }
};
