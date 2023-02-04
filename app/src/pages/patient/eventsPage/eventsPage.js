import React from "react";
import HeaderComponent from "../../../components/header";
import FooterComponent from "../../../components/footer";
import NavRow from "../../../components/navRow";
import secureLocalStorage from "react-secure-storage";

import {
  faCapsules,
  faFileMedical,
  faCalendarDays,
  faVials,
  faSuitcaseMedical,
  faFileInvoiceDollar,
  faUserDoctor,
  faCalendarCheck,
  faHouseMedical,
} from "@fortawesome/free-solid-svg-icons";

//updating medical info - FileMedical
//viewing medical info - FileMedical
//appointment reminder - CalendarDays
//new test result now available - Vials
//upcoming procedure - SuitcaseMedical
//medication refill needed - Capsules
//medication change - Capsules
//medication reminder - Capsules
//billing info needed - FileInvoiceDollar
//new message from healthcare staff - UserDoctor
//appointment canceled - CalendarDays
//appointment confirmation - CalendarDays
//apointment re-scheduled - CalendarDays
//appointment check-in - CalendarCheck
//pharmacy update - HouseMedical
//billing info updated - FileInvoiceDollar


function addEvent(event) {
    var events = JSON.parse(secureLocalStorage.getItem("events"))
    events.concat(event)
    events = JSON.stringify(events)
    secureLocalStorage.setItem("events", events)
}

function EventsPage() {
  var storage = '[{"title":"Medical Information Updated.", "description":"Your allergies have been updated."},{"title":"Appointment Reminder", "description":"You have an appointment at 5:00PM tomorrow."}]'
  secureLocalStorage.setItem("events", storage)
  const jsonData = JSON.parse(secureLocalStorage.getItem("events"))
  
  return (
    <>
      <HeaderComponent />

      <div class="h-max pb-16">
        
        {jsonData.map((obj) => {
          if (obj.title.includes("Medical Information")) {
            obj.eventIcon = faFileMedical
          } else if (obj.title.includes("Appointment")) {
            obj.eventIcon = faCalendarDays
          } else if (obj.title.includes("Billing")) {
            obj.eventIcon = faFileInvoiceDollar
          } else if (obj.title.includes("Medication")) {
            obj.eventIcon = faCapsules
          } else if (obj.title.includes("Pharmacy")) {
            obj.eventIcon = faHouseMedical
          } else if (obj.title.includes("Procedure")) {
            obj.eventIcon = faSuitcaseMedical
          } else if (obj.title.includes("Test")) { //test as in test results
            obj.eventIcon = faVials
          } else if (obj.title.includes("Message")) {
            obj.eventIcon = faUserDoctor
          }
    
          //eventIcon
          //title
          //description
          return (
          <NavRow 
            icon={obj.eventIcon}
            title={obj.title}
            description={obj.description}
          />
          )
          
          })}
        
        <p>{storage}</p>

      </div>

      <FooterComponent />
    </>
  );
}

export default EventsPage;
