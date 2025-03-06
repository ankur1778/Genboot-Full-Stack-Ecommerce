import { getRootUrl } from "../api/getRootUrl";
import { jwtdecode } from "../utils/jwt_decode";
import Cookies from "js-cookie";
import ToastMessage from "../utils/ToastMessage";
import { RoleMessages, TokenMessages } from "../utils/statusMessages";

export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return true;
};

export async function sendPublicRequest(path, opts = {}) {
  const headers = Object.assign({}, opts.headers || {}, {
    "Content-type": "application/json; charset=UTF-8",
  });
  const response = await fetch(
    `${getRootUrl()}${path}`,
    Object.assign({ method: "POST" }, opts, {
      headers,
    })
  );

  const data = await response.json();
  return data;
}

export async function sendRequest(path, opts = {}) {
  const token = Cookies.get("token");

  if (!token) {
    throw new Error(<ToastMessage message={TokenMessages.NOT_FOUND} />);
  }

  let decodedToken;
  try {
    decodedToken = jwtdecode(token);
  } catch (error) {
    <ToastMessage message={TokenMessages.INVALID} />;
    return false;
  }

  const roleId = decodedToken?.roleId;
  if (!roleId) {
    <ToastMessage message={RoleMessages.MISSING} />;
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
    return false;
  }
}

export async function sendFormDataRequest(path, opts = {}) {
  const token = Cookies.get("token");

  if (!token) {
    throw new Error(<ToastMessage message={TokenMessages.NOT_FOUND} />);
  }

  let decodedToken;
  try {
    decodedToken = jwtdecode(token);
  } catch (error) {
    <ToastMessage message={TokenMessages.INVALID} />;
    return false;
  }

  const roleId = decodedToken?.roleId;
  if (!roleId) {
    <ToastMessage message={RoleMessages.MISSING} />;
    return false;
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    ...opts.headers,
  };

  try {
    const response = await fetch(`${getRootUrl()}${path}`, {
      method: opts.method || "POST",
      body: opts.body,
      headers,
      credentials: "same-origin",
    });

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
