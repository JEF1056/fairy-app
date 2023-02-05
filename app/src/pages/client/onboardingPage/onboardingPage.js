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

function OnBoardingPage() {
  const [getOnBoardingStep, setOnBoardingStep] = useRecoilState(onBoardingStep)
  return (
    <>
      <ul class="steps steps-vertical lg:steps-horizontal">
        <li class= {getOnBoardingStep == 0 ? "step step-primary": "step"}>Personal Information</li>
        <li class= {getOnBoardingStep == 1 ? "step step-primary": "step"}>Medical History</li>
        <li class= {getOnBoardingStep == 2 ? "step step-primary": "step"}>Insurance Information</li>
        <li class= {getOnBoardingStep == 3 ? "step step-primary": "step"}>Review and Submit</li>
      </ul>
      {switch (getOnBoardingStep) {
        case 0:
          <br></br>
      Legal Name:
      <br></br>
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
      <br></br>
      Sex:
      <select class="select max-w-xs">
        <option disabled selected>
          Select
        </option>
        <option>Female</option>
        <option>Male</option>
        <option></option>
      </select>
      <br></br>
      Preferred gender:
      <select class="select max-w-xs">
        <option disabled selected>
          Select
        </option>
        <option>Female</option>
        <option>Male</option>
        <option>Non-binary</option>
      </select>
      <br></br>
      Race: (check all that apply)
      <br></br>
      <input type="checkbox" class="checkbox-xs" />
      <span class="label-text"> American Indian or Alaska Native</span>
      <br></br>
      <input type="checkbox" class="checkbox-xs" />
      <span class="label-text"> Asian</span>
      <br></br>
      <input type="checkbox" class="checkbox-xs" />
      <span class="label-text"> Black or African American</span>
      <br></br>
      <input type="checkbox" class="checkbox-xs" />
      <span class="label-text"> White</span>
      <br></br>
      <input type="checkbox" class="checkbox-xs" />
      <span class="label-text"> Decline to Provide</span>
      <br></br>

      Ethnicity:
      <br></br>
      <input type="checkbox" class="checkbox-xs" />
      <span class="label-text"> Hispanic or Latino</span>
      <br></br>
      <input type="checkbox" class="checkbox-xs" />
      <span class="label-text"> Not Hispanic or Latino</span>
      <br></br>
      <input type="checkbox" class="checkbox-xs" />
      <span class="label-text"> Decline to Provide</span>
      <br></br>

    Phone:
    <input
      type="text"
      placeholder="(XXX)-XXX-XXXX"
      class="input w-full max-w-xs"
    />
      Address:
      <br></br>
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
      <br></br>
      <input
        type="text"
        placeholder="City"
        class="input w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="State"
        class="input w-full max-w-xs"
      />
      <input
      type="text"
      placeholder="ZIP"
      class="input w-full max-w-xs"
    />
    <br></br>
    Emergency Contact Information:
    <br></br>
    Name:
    <input
      type="text"
      placeholder="Name"
      class="input w-full max-w-xs"
    />
    Phone:
    <input
      type="text"
      placeholder="(XXX)-XXX-XXXX"
      class="input w-full max-w-xs"
    />
    <br></br>
    Relationship to Patient:
    <input
      type="text"
      placeholder="Type here"
      class="input w-full max-w-xs"
    />
    <br></br>
    Address:
      <br></br>
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
      <br></br>
      <input
        type="text"
        placeholder="City"
        class="input w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="State"
        class="input w-full max-w-xs"
      />
      <input
      type="text"
      placeholder="ZIP"
      class="input w-full max-w-xs"
    />
    <br></br>
        case 1:
          //medical history
        case 2:
          //insurance
        case 3:
          //review and submit
      };}
  



    <br></br>
    <button class="btn" onClick={() => {setOnBoardingStep(getOnBoardingStep+1)}}>Next</button>
    </>
  );
}

export default OnBoardingPage;
