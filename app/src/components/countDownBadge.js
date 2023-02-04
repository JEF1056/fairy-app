import React, { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { atom, useRecoilState } from "recoil";

const seconds = 60

export const countDownSeconds = atom({
  key: "countDownSeconds",
  default: seconds,
});

export var currentUuid = uuidv4();

// suffix (optional) is a string that will be appended to the badge
// prefix (optional) is a string that will be prepended to the badge
// countDownSeconds is a number that will be used to set the countdown
// callback is a function that will be called when the countdown ends

export function CountDownBadge(props) {
  const [getCountDownSeconds, setCountDownSeconds] =
    useRecoilState(countDownSeconds);
  const timerRef = useRef();
  const qrRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCountDownSeconds((prevTimeLeft) => {
        if (prevTimeLeft > 0) {
          return prevTimeLeft - 1;
        } else {
          return seconds;
        }
      });
    }, 1000);
    qrRef.current = setInterval(() => {
      props.callback();
    }, (seconds * 1000) + 900);
    return () => {
      clearInterval(timerRef.current);
      clearInterval(qrRef.current);
      props.callback();
    };
  }, [setCountDownSeconds]);

  return (
    <span class="badge">
      <p>{props.prefix}</p>
      <span class="countdown">
        <span
          className={[
            props.prefix ? "pl-2" : "",
            props.suffix ? "pr-2" : "",
          ].join(" ")}
          style={{ "--value": getCountDownSeconds }}
        ></span>
      </span>
      {props.suffix}
    </span>
  );
}

export default CountDownBadge;
