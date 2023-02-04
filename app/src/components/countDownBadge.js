import { v4 as uuidv4 } from "uuid";
import { transferCode } from "../util/transferCodes";
import { atom, useRecoilState, useSetRecoilValue } from "recoil";

export const countDownSeconds = atom({
  key: "countDownSeconds",
  default: 0,
});

export var currentUuid = uuidv4();

// suffix (optional) is a string that will be appended to the badge
// prefix (optional) is a string that will be prepended to the badge
// countDownSeconds is a number that will be used to set the countdown

export function CountDownBadge(props) {
  const [getCountDownSeconds, setCountDownSeconds] =
    useRecoilState(countDownSeconds);
  const [setTransferCode] = useSetRecoilValue(transferCode);

  if (countDownSeconds === 0) {
    setTransferCode(uuidv4());
    setCountDownSeconds(props.countDownSeconds);
  }

  setCountDownSeconds(getCountDownSeconds - 1);

  return (
    <span class="badge">
      <p>{props.prefix}</p>
      <span class="countdown">
        <span style={{ "--value": getCountDownSeconds }}></span>
      </span>
      {props.suffix}
    </span>
  );
}

export default CountDownBadge;
