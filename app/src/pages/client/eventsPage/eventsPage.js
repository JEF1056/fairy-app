import React from "react";
import HeaderComponent from "../../../components/client/header";
import FooterComponent from "../../../components/client/footer";
import NavRow from "../../../components/client/navRow";
import secureLocalStorage from "react-secure-storage";
import AlertComponent from "../../../components/client/alert";

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
  var events = JSON.parse(secureLocalStorage.getItem("events"));
  if (!events) {
    events = []
  }
  events.push(event);
  events = JSON.stringify(events);
  secureLocalStorage.setItem("events", events);
}

function EventsPage() {
  var storage = [
    {
      title: "Medical Information Updated.",
      description: "Your allergies have been updated.",
    },
    {
      title: "Appointments",
      description: "Appointment Reminder: In-person visit 5/1/23 1:10PM.",
    },
    {
      title: "Test Result Available.",
      description: "Your XYZ scan is now available.",
    },
    {
      title: "Upcoming Procedure",
      description: "You have a procedure scheduled for 2:00PM tomorrow.",
    },
    {
      title: "Medication Refill Needed",
      description: "Your prescription is running low.",
    },
    {
      title: "Billing Information Needed",
      description: "Billing information needed.",
    },
    {
      title: "Healthcare Staff Message",
      description: "You have received a new message from a healthcare staff.",
    },
    {
      title: "Appointment Re-Scheduled",
      description:
        "Your appointment has been re-scheduled to Tuesday, February 21st at 5:00PM.",
    },
    {
      title: "Appointment Check-In",
      description: "Check-in for your appointment.",
    },
    {
      title: "Pharmacy Update",
      description: "View Pharmacy.",
    },
  ];
  storage = JSON.stringify(storage);
  secureLocalStorage.setItem("events", storage);
  const jsonData = JSON.parse(secureLocalStorage.getItem("events"));

  return (
    <>
      <HeaderComponent />

      <div class="h-max pb-16">
        {jsonData.map((obj) => {
          if (obj.title.includes("Medical Information")) {
            obj.eventIcon = faFileMedical;
          } else if (obj.title.includes("Check")) {
            //Check as in Check-In
            obj.eventIcon = faCalendarCheck;
          } else if (obj.title.includes("Appointment")) {
            obj.eventIcon = faCalendarDays;
          } else if (obj.title.includes("Billing")) {
            obj.eventIcon = faFileInvoiceDollar;
          } else if (obj.title.includes("Medication")) {
            obj.eventIcon = faCapsules;
          } else if (obj.title.includes("Pharmacy")) {
            obj.eventIcon = faHouseMedical;
          } else if (obj.title.includes("Procedure")) {
            obj.eventIcon = faSuitcaseMedical;
          } else if (obj.title.includes("Test")) {
            //test as in test results
            obj.eventIcon = faVials;
          } else if (obj.title.includes("Message")) {
            obj.eventIcon = faUserDoctor;
          }

          //eventIcon
          //title
          //description
          return (
            <AlertComponent
              icon={obj.eventIcon}
              title={obj.title}
              description={obj.description}
              url="View"
            />
          );
        })}

        <FooterComponent />
        {/* <p>{storage}</p> */}
      </div>
    </>
  );
}

export default EventsPage;
