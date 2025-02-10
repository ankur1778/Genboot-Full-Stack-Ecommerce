import { singleProductRequest } from "./sendPublicRequest";

export const SingleProduct = async (productId) => {
  try {
    const product = await singleProductRequest(`/products/${productId}`, {  
      method: "GET",
    });
    return product; 
  } catch (error) {
    console.error("Error fetching product: ", error);
    throw error;  
  }
};
