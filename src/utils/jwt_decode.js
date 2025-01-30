import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const jwtdecode = () => {
  const token = Cookies.get("token");
  if (!token) return null;

  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
