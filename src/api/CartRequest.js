import { jwtdecode } from "../utils/jwt_decode";
import ToastMessage from "../utils/ToastMessage";
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
    <ToastMessage message={"❌ Error in addItemToCartRequest:"} />;
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
    <ToastMessage message={"Invalid Token"} />;

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

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Error in Getting User's Cart", error);
    return false;
  }
}

export async function removeItemFromCartRequest(path, opts = {}) {
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
      Object.assign({ method: "DELETE", credentials: "same-origin" }, opts, {
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
    console.error("❌ Error in Removing Cart Item", error);
    return false;
  }
}

export async function decreaseCartItemRequest(path, opts = {}) {
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
      Object.assign({ method: "PATCH", credentials: "same-origin" }, opts, {
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
    console.error("❌ Error in Decreasing Cart Item", error);
    return false;
  }
}

export async function increaseCartItemRequest(path, opts = {}) {
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
      Object.assign({ method: "PATCH", credentials: "same-origin" }, opts, {
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
    return false;
  }
}
