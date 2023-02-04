import { v4 as uuidv4 } from "uuid";
import { atom } from "recoil";

export const transferCode = atom({
  key: "transferCode",
  default: uuidv4(),
});
