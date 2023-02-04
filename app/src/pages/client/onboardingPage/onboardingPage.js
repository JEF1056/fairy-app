import React from "react";
//import HeaderComponent from "../../../components/client/header";
//import FooterComponent from "../../../components/client/footer";
//import NavRow from "../../../components/client/navRow";
import {
  faArrowRightArrowLeft,
  faCapsules,
} from "@fortawesome/free-solid-svg-icons";

function OnBoardingPage() {
  return (
    <>
      <ul class="steps steps-vertical lg:steps-horizontal">
        <li class="step step-primary">Personal Information</li>
        <li class="step step-primary">Medical History</li>
        <li class="step">Insurance Information</li>
        <li class="step">Receive Product</li>
      </ul>
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
    <input
      type="text"
      placeholder="Name"
      class="input w-full max-w-xs"
    />
    
    </>
  );
}

export default OnBoardingPage;
