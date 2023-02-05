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
      //break;
    case 1: //medical history
      return (
        <>
    <br />
    <br></br>
          Please select any allergies you may have (specify cause and nature of reaction):
          <br></br>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Animals: </span>
          <input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Food: </span>
          <input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Insect stings: </span>
          <input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Medicine/drugs: </span>
          <input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Plants/Trees: </span>
          <input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Other (please list): </span>
          <input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" />
          <br />
          <br></br>

          Medical History:
          <br></br>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> ADD/ADHD</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Arthritis</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Asthma</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Anxiety</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Athlete's Foot</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Behavioral Changes</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Bed-wetting</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Bipolar Disorder</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Bleeding/Clotting Disorder</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Bronchitis</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Chicken pox</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Concussion</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Constipation</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Convulsions</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> COVID-19</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Crohn's Disease</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Depression</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Diabetes</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Down's Syndrome</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Eating Disorders</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Emotional Disturbances</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Epilepsy</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Eyes: Contact Lenses or Glasses</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Fainting</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Hay fever</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Headaches (frequent)</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Hearing Impairment</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Heart Defect/Disease</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Hepatitis A/B/C</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> HIV/AIDS</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Hypertension</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Kidney Disease</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Menstrual Complications</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Migraines</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Mononucleosis</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Muscular Disease/Disorder</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Nervous System Disorder</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Nosebleeds (frequent)</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Physical Disabilities</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Seizures</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Sickle Cell Trait or Disease</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Skeletal Disease/Disorder</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Skin Conditions</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Sleep Disturbance</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Visual Impairments</span>
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Other (please list): </span>
          <input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" />
          <br />
          <br></br>
          Please list any current medications:
          <br></br>
          <textarea placeholder="Bio" class="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
          <br></br>
          <br></br>
          Any other dietary restrictions?
          <br></br>
          <textarea placeholder="Bio" class="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
          <br></br>
          <br />
    </>
      );
    case 2: //insurance
      return (
      <>
      <br />
          Name of Insurance Carrier: <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />
          <br></br>
          Policy Number: <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />
          <br></br>
          Group Number: <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />
          <br></br>
          Insured's Name: <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />
          <br></br>
          Member ID: <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />
          <br></br>
          Relationship to Member (Self, etc.): <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />
          <br></br>
          Upload insurance card (optional):
          <br></br>
          <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
          <br></br>

      </>
      );
    case 3: //review and submit: add homepage button and back buttons
      return (
      <>
      
      </>
      );
    default:
      return (
        <>
        
        </>
        );
  }
}


function OnBoardingPage() {
  const [getOnBoardingStep, setOnBoardingStep] = useRecoilState(onBoardingStep);
  return (
    <>
      <ul class="steps steps-vertical lg:steps-horizontal">
        <li class={getOnBoardingStep === 0 ? "step step-primary" : "step"}>
          Personal Information
        </li>
        <li class={getOnBoardingStep === 1 ? "step step-primary" : "step"}>
          Medical History
        </li>
        <li class={getOnBoardingStep === 2 ? "step step-primary" : "step"}>
          Insurance Information
        </li>
      </ul>
      <div class="m-4">
      <CardNode step={getOnBoardingStep} />
      </div>
      <br />
      <button
        class="btn"
        onClick={() => {
          setOnBoardingStep(getOnBoardingStep - 1);
        }}
      >
        Back
      </button>
      
      
      {getOnBoardingStep <= 2 ? (<div class="p-4">
      <button
        class="btn"
        onClick={() => {
          setOnBoardingStep(getOnBoardingStep + 1);
        }}
      >
        Next
      </button></div>)
: (
      <div class="p-4">
      <button
        class="btn"
        onClick={() => {
          setOnBoardingStep(getOnBoardingStep + 1); //change so that it's only on last page: set last onboarding step case to homepage?
        }}
      >
        Navigate to Home
      </button> 
      </div>)}
    </>
  );
}

export default OnBoardingPage;
