import React from "react";
import { atom, useRecoilState } from "recoil";
import {
  faArrowRightArrowLeft,
  faCapsules,
} from "@fortawesome/free-solid-svg-icons";

export const onBoardingStep = atom({
  key: "onBoardingStep",
  default: 0,
});

function CardNode(props) {
  switch (props.step) {
    case 0:
      return (
        <>
          <br />
          Legal Name:
          <br />
          <input
            type="text"
            placeholder="Type here"
            class="input w-full max-w-xs"
          />
          Preferred Name:
          <input
            type="text"
            placeholder="Type here"
            class="input w-full max-w-xs"
          />
          <br />
          Sex:
          <select class="select max-w-xs">
            <option disabled selected>
              Select
            </option>
            <option>Female</option>
            <option>Male</option>
            <option></option>
          </select>
          <br />
          Preferred gender:
          <select class="select max-w-xs">
            <option disabled selected>
              Select
            </option>
            <option>Female</option>
            <option>Male</option>
            <option>Non-binary</option>
          </select>
          <br />
          Race: (check all that apply)
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> American Indian or Alaska Native</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Asian</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Black or African American</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> White</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Decline to Provide</span>
          <br />
          Ethnicity:
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Hispanic or Latino</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Not Hispanic or Latino</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Decline to Provide</span>
          <br />
          Phone:
          <input
            type="text"
            placeholder="(XXX)-XXX-XXXX"
            class="input w-full max-w-xs"
          />
          Address:
          <br />
          <input
            type="text"
            placeholder="Address Line 1"
            class="input w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Address Line 2"
            class="input w-full max-w-xs"
          />
          <br />
          <input type="text" placeholder="City" class="input w-full max-w-xs" />
          <input
            type="text"
            placeholder="State"
            class="input w-full max-w-xs"
          />
          <input type="text" placeholder="ZIP" class="input w-full max-w-xs" />
          <br />
          Emergency Contact Information:
          <br />
          Name:
          <input type="text" placeholder="Name" class="input w-full max-w-xs" />
          Phone:
          <input
            type="text"
            placeholder="(XXX)-XXX-XXXX"
            class="input w-full max-w-xs"
          />
          <br />
          Relationship to Patient:
          <input
            type="text"
            placeholder="Type here"
            class="input w-full max-w-xs"
          />
          <br />
          Address:
          <br />
          <input
            type="text"
            placeholder="Address Line 1"
            class="input w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Address Line 2"
            class="input w-full max-w-xs"
          />
          <br />
          <input type="text" placeholder="City" class="input w-full max-w-xs" />
          <input
            type="text"
            placeholder="State"
            class="input w-full max-w-xs"
          />
          <input type="text" placeholder="ZIP" class="input w-full max-w-xs" />
          <br />
        </>
      );
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    default:
      break;
  }
}

function OnBoardingPage() {
  const [getOnBoardingStep, setOnBoardingStep] = useRecoilState(onBoardingStep);
  return (
    <>
      <ul class="steps steps-vertical lg:steps-horizontal">
        <li class={getOnBoardingStep == 0 ? "step step-primary" : "step"}>
          Personal Information
        </li>
        <li class={getOnBoardingStep == 1 ? "step step-primary" : "step"}>
          Medical History
        </li>
        <li class={getOnBoardingStep == 2 ? "step step-primary" : "step"}>
          Insurance Information
        </li>
        <li class={getOnBoardingStep == 3 ? "step step-primary" : "step"}>
          Review and Submit
        </li>
      </ul>

      <CardNode step={getOnBoardingStep} />

      <br />
      <button
        class="btn"
        onClick={() => {
          setOnBoardingStep(getOnBoardingStep + 1);
        }}
      >
        Next
      </button>
    </>
  );
}

export default OnBoardingPage;
