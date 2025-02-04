import { jwtdecode } from "../utils/jwt_decode";
import { getRootUrl } from "./getRootUrl";
import Cookies from "js-cookie";

export async function addItemToCartRequest(path, opts = {}) {
  // Get authToken from cookies
  const token = Cookies.get("token");

  if (!token) {
    throw new Error("Auth token not found");
  }

  let decodedToken;
  try {
    decodedToken = jwtdecode(token);
  } catch (error) {
    console.error("Invalid token:", error);
    return false;
  }

  const roleId = decodedToken?.roleId;
  if (!roleId) {
    console.error("roleId is missing in token");
    return false;
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...opts.headers,
  };

  try {
    const response = await fetch(
      `${getRootUrl()}${path}`,
      Object.assign({ method: "POST", credentials: "same-origin" }, opts, {
        headers,
      })
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Request failed: ${response.status} - ${errorMessage}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Error in addItemToCartRequest:", error);
    return false;
  }
}

export async function getUserCartRequest(path, opts = {}) {
  // Get authToken from cookies
  const token = Cookies.get("token");

  if (!token) {
    throw new Error("Auth token not found");
  }

  let decodedToken;
  try {
    decodedToken = jwtdecode(token);
  } catch (error) {
    console.error("Invalid token:", error);
    return false;
  }

  const roleId = decodedToken?.roleId;
  if (!roleId) {
    console.error("roleId is missing in token");
    return false;
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...opts.headers,
  };

  try {
    const response = await fetch(
      `${getRootUrl()}${path}`,
      Object.assign({ method: "GET", credentials: "same-origin" }, opts, {
        headers,
      })
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Request failed: ${response.status} - ${errorMessage}`);
    }
console.log(response,"res");

    const data = await response.json();
    console.log(data,"dddd");
    
    return data;
  } catch (error) {
    console.error("❌ Error in addItemToCartRequest:", error);
    return false;
  }
}
