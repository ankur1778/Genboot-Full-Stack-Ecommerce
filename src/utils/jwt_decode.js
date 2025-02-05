import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import ToastMessage from "./ToastMessage";
import { TokenMessages } from "./statusMessages";

export const jwtdecode = () => {
  const token = Cookies.get("token");
  if (!token) return null;

  try {
    return jwtDecode(token);
  } catch (error) {
    <ToastMessage message={TokenMessages.INVALID} />;
    return null;
  }
};
