import React from "react";
import HeaderComponent from "../../../components/header";
import FooterComponent from "../../../components/footer";
import NavRow from "../../../components/navRow";
import {
  faArrowRightArrowLeft,
  faCapsules,
} from "@fortawesome/free-solid-svg-icons";

//use local storage to store list of events, then parse and loop through it
//localStorage.setItem('myCat', 'Tom'); [0] key, [1] val
//
//add event function - add event key, func should read from event key to add on new event and then write back to the event key and then page should read and then loop through this event key

function EventsPage() {
  return (
    <>
      <HeaderComponent />

      <div class="h-max pb-16">
        <NavRow
          icon={faArrowRightArrowLeft}
          title="Export Data"
          description="Transfer from one medical provider to another"
        />

        <NavRow
          icon={faCapsules}
          title="View Medications"
          description="See prescriptions and medication schedule"
        />
      </div>

      <FooterComponent />
    </>
  );
}

export default EventsPage;
