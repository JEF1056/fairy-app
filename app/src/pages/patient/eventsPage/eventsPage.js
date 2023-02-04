import React from "react";
import HeaderComponent from "../../../components/header";
import FooterComponent from "../../../components/footer";
import NavRow from "../../../components/navRow";
import secureLocalStorage from "react-secure-storage";

import {
  faArrowRightArrowLeft,
  faCapsules,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons";

//use local storage to store list of events, then parse and loop through it
//localStorage.setItem('myCat', 'Tom'); [0] key, [1] val
//
//add event function - add event key, func should read from event key to add on new event and then write back to the event key and then page should read and then loop through this event key

function addEvent(eventJson) {
    var event = JSON.parse(eventJson)   
    console.log(event)
    secureLocalStorage.setItem("testkey", event)
}




function EventsPage() {
  addEvent('{"result":true, "count":42}')
  //getitem

  var storage = "[1,2,3]"

  
  return (
    //loop through all events
    //get their individual value
    <>
      <HeaderComponent />

      <div class="h-max pb-16">

        {
          JSON.parse(storage, (key) => {
            <p>{key}</p>
          })
        }

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

        <NavRow
            icon={faNotesMedical}
            title = "Test Alert"
            description = "Test desc"
        />
      </div>

      <FooterComponent />
    </>
  );
}

export default EventsPage;
