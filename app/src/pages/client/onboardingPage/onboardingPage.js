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
      <br></br>
      Preferred Name:
      <br></br>
      <input
        type="text"
        placeholder="Type here"
        class="input w-full max-w-xs"
      />
      <br></br>
      Please select your gender:
      <br></br>
      <select class="select max-w-xs">
        <option disabled selected>
          Select
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
    </>
  );
}

export default OnBoardingPage;
