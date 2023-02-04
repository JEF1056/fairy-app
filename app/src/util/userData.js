import secureLocalStorage from "react-secure-storage";

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

export function GetUserID() {
  let userId = secureLocalStorage.getItem("userId");
  console.log(userId);
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
