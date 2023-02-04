import secureLocalStorage from "react-secure-storage";
import { v4 as uuidv4 } from "uuid";

export function GetUserID() {
  let userId = secureLocalStorage.getItem("userId");
  if (userId == null) {
    userId = uuidv4();
    secureLocalStorage.setItem("userId", userId);
  }
  return userId;
}

export function SetUserName() {
  let userName = secureLocalStorage.getItem("userName");
  console.log(userName);
  if(userName == null) {
    userName = uuidv4();
    secureLocalStorage.setItem("userName", userName);
  }
  return userName;
}
