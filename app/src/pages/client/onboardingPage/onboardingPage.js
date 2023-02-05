import React, { useEffect } from "react";
import { atom, useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

export const onBoardingStep = atom({
  key: "onBoardingStep",
  default: 0,
});

function CardNode(props) {
  switch (props.step) {
    case 0:
      return (
        <>
          <label class="mr-2">Legal Name:</label>
          <input
            type="text"
            placeholder="Type here"
            class="input w-full max-w-xs"
          />
          <br />
          <br />
          <label class="mr-2">Preferred Name:</label>
          <input
            type="text"
            placeholder="Type here"
            class="input w-full max-w-xs"
          />
          <br />
          <br />
          <label class="mr-2">Preferred Gender:</label>
          <select class="select max-w-xs">
            <option disabled selected>
              Select
            </option>
            <option>Female</option>
            <option>Male</option>
            <option>Non-binary</option>
          </select>
          <br />
          <br />
          Race: (check all that apply)
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> American Indian or Alaska Native</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Asian</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Black or African American</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> White</span>
          <br />
          <br />
          Ethnicity:
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Hispanic or Latino</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Not Hispanic or Latino</span>
          <br />
          <br />
          Phone:
          <input
            type="text"
            placeholder="(XXX)-XXX-XXXX"
            class="input w-full max-w-xs"
          />
          <br></br>
          <br></br>
          Address:
          <br />
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
          <br />
          <input type="text" placeholder="City" class="input w-full max-w-xs" />
          <input
            type="text"
            placeholder="State"
            class="input w-full max-w-xs"
          />
          <input type="text" placeholder="ZIP" class="input w-full max-w-xs" />
          <br />
          <br />
          Emergency Contact Information:
          <br />
          <br />
          <label class="mr-2">Name:</label>
          <input type="text" placeholder="Name" class="input w-full max-w-xs" />
          <label class="mr-2">Phone:</label>
          <input
            type="text"
            placeholder="(XXX)-XXX-XXXX"
            class="input w-full max-w-xs"
          />
          <br />
          <br />
          <label class="mr-2">Relationship to Patient:</label>
          <input
            type="text"
            placeholder="Type here"
            class="input w-full max-w-xs"
          />
          <br />
          <br />
          Address:
          <br />
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
          <br />
          <input type="text" placeholder="City" class="input w-full max-w-xs" />
          <input
            type="text"
            placeholder="State"
            class="input w-full max-w-xs"
          />
          <input type="text" placeholder="ZIP" class="input w-full max-w-xs" />
          <br />
          <br />
        </>
      );
    //break;
    case 1: //medical history
      return (
        <>
          <br />
          Code?
          <br></br>
          <input type="radio" name="radio-2" class="radio radio-primary" checked />
          <span class="label-text">Full Code</span>
          <br></br>
          <input type="radio" name="radio-2" class="radio radio-primary" />
          <span class="label-text">DNR</span>
          <br></br>
          Please select any allergies you may have (specify cause and nature of
          reaction):
          <br></br>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Animals: </span>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-xs w-full max-w-xs"
          />
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Food: </span>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-xs w-full max-w-xs"
          />
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Insect stings: </span>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-xs w-full max-w-xs"
          />
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Medicine/drugs: </span>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-xs w-full max-w-xs"
          />
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Plants/Trees: </span>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-xs w-full max-w-xs"
          />
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Other (please list): </span>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-xs w-full max-w-xs"
          />
          <br />
          <br />
          <br></br>
          Medical History:
          <br></br>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> ADD/ADHD</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Arthritis</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Asthma</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Anxiety</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Athlete's Foot</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Behavioral Changes</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Bed-wetting</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Bipolar Disorder</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Bleeding/Clotting Disorder</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Bronchitis</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Chicken pox</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Concussion</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Constipation</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Convulsions</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> COVID-19</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Crohn's Disease</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Depression</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Diabetes</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Down's Syndrome</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Eating Disorders</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Emotional Disturbances</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Epilepsy</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Eyes: Contact Lenses or Glasses</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Fainting</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Hay fever</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Headaches (frequent)</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Hearing Impairment</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Heart Defect/Disease</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Hepatitis A/B/C</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> HIV/AIDS</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Hypertension</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Kidney Disease</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Menstrual Complications</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Migraines</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Mononucleosis</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Muscular Disease/Disorder</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Nervous System Disorder</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Nosebleeds (frequent)</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Physical Disabilities</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Seizures</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Sickle Cell Trait or Disease</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Skeletal Disease/Disorder</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Skin Conditions</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Sleep Disturbance</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Visual Impairments</span>
          <br />
          <br />
          <input type="checkbox" class="checkbox-xs" />
          <span class="label-text"> Other (please list): </span>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-xs w-full max-w-xs"
          />
          <br />
          <br />
          <br></br>
          Please list any current medications:
          <br></br>
          <textarea
            placeholder="Bio"
            class="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
          <br></br>
          <br></br>
          Any other dietary restrictions?
          <br></br>
          <textarea
            placeholder="Bio"
            class="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
          <br></br>
          <br />
          <br />
        </>
      );
    case 2: //insurance
      return (
        <>
          <br />
          <br />
          Name of Insurance Carrier:{" "}
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full max-w-xs"
          />
          <br></br>
          Policy Number:{" "}
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full max-w-xs"
          />
          <br></br>
          Group Number:{" "}
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full max-w-xs"
          />
          <br></br>
          Insured's Name:{" "}
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full max-w-xs"
          />
          <br></br>
          Member ID:{" "}
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full max-w-xs"
          />
          <br></br>
          Relationship to Member (Self, etc.):{" "}
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full max-w-xs"
          />
          <br></br>
          Upload insurance card (optional):
          <br></br>
          <input
            type="file"
            class="file-input file-input-bordered w-full max-w-xs"
          />
          <br></br>
        </>
      );
    case 3: //review and submit: add homepage button and back buttons
      return <></>;
    default:
      return <></>;
  }
}

function OnBoardingPage() {
  const navigate = useNavigate();
  const [getOnBoardingStep, setOnBoardingStep] = useRecoilState(onBoardingStep);

  const onboarding = secureLocalStorage.getItem("onBoardingComplete");
  console.log(onboarding);
  useEffect(() => {
    if (onboarding === "true") {
      navigate("/client");
    }
  });

  return (
    <>
      <div class="m-8">
        <div class="card bg-secondary text-primary-content">
          <div class="card-body">
            <ul class="steps steps-vertical lg:steps-horizontal">
              <li
                class={getOnBoardingStep === 0 ? "step step-primary" : "step"}
              >
                Personal Information
              </li>
              <li
                class={getOnBoardingStep === 1 ? "step step-primary" : "step"}
              >
                Medical History
              </li>
              <li
                class={getOnBoardingStep === 2 ? "step step-primary" : "step"}
              >
                Insurance Information
              </li>
            </ul>
            {/* <h2 class="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p> */}

            <div class="m-4">
              <CardNode step={getOnBoardingStep} />
            </div>

            <div class="btn-group">
              <button
                class="btn"
                onClick={() => {
                  setOnBoardingStep(getOnBoardingStep - 1);
                }}
              >
                Back
              </button>

              {getOnBoardingStep <= 1 ? (
                <button
                  class="btn"
                  onClick={() => {
                    setOnBoardingStep(getOnBoardingStep + 1);
                  }}
                >
                  Next
                </button>
              ) : (
                <button
                  class="btn"
                  onClick={() => {
                    secureLocalStorage.setItem("onBoardingComplete", "true");
                    navigate("/client");
                  }}
                >
                  Navigate to Home
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnBoardingPage;
