import { jwtdecode } from "../../utils/jwt_decode";
import { getRootUrl } from "./getRootUrl";
import Cookies from "js-cookie";

export async function allUsersRequest(path, opts = {}) {
  const token = Cookies.get("token");

  if (!token) {
    console.error("Token is missing");
    return false;
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
    "Content-Type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${token}`,
    ...opts.headers,
  };

  try {
    const response = await fetch(`${getRootUrl()}${path}`, {
      method: "POST",
      credentials: "same-origin",
      ...opts,
      headers,
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Request failed: ${response.status} - ${errorMessage}`);
    }

    const data = await response.json();

    if (data?.error) {
      console.error("API Error:", data.error);
    }

    return data;
  } catch (error) {
    console.error("Error in allUsersRequest:", error);
    return false;
  }
}

export async function allProductsRequest(path, opts = {}) {
  const token = Cookies.get("token");

  if (!token) {
    console.error("Token is missing");
    return false;
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
    "Content-Type": "application/json; charset=UTF-8",
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

    const data = await response.json();

    if (data?.error) {
      console.error("API Error:", data.error);
    }

    return data;
  } catch (error) {
    console.error("Error in allUsersRequest:", error);
    return false;
  }
}
