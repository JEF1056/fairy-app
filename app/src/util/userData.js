import secureLocalStorage from "react-secure-storage";
import { v4 as uuidv4 } from "uuid";

export function GetUserID() {
  let userId = secureLocalStorage.getItem("userId");
  console.log(userId);
  if (userId == null) {
    userId = uuidv4();
    secureLocalStorage.setItem("userId", userId);
  }
  return userId;
}