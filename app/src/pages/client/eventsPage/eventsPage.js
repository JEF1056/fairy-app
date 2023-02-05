import React from "react";
import HeaderComponent from "../../../components/client/header";
import FooterComponent from "../../../components/client/footer";
import NavRow from "../../../components/client/navRow";
import secureLocalStorage from "react-secure-storage";
import { v4 as uuidv4 } from "uuid";
import moment from "moment"

import {
  faCircleInfo,
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

export function addEvent(event) {
  var events = JSON.parse(secureLocalStorage.getItem("events"));
  if (!events) {
    events = [];
  }
  event["uuid"] = uuidv4();
  events.push(event);
  events = JSON.stringify(events);
  secureLocalStorage.setItem("events", events);
}

function delEvent(uuid) {
  var events = JSON.parse(secureLocalStorage.getItem("events"));
  //loop through all objects, check if uuid is the same
  //if same, remove it
  if (!events) {
    return;
  }

  let index = -1;
  for (let i = 0; i < events.length; i++) {
    if (events[i].uuid === uuid) {
      index = i;
      break;
    }
  }

  if (index > -1) {
    events.splice(index, 1);
    if (!events) {
      events = [];
    }
    events = JSON.stringify(events);
    secureLocalStorage.setItem("events", events);
  }
}

function EventsPage() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  if (!secureLocalStorage.getItem("events")) {
    addEvent({
      title: "Medical Information Updated.",
      description: "Your allergies have been updated.",
    });
  }

  var fakeEvents = [
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
  ];

  let events = JSON.parse(secureLocalStorage.getItem("events"));
  if (!events) {
    events = [];
  }

  return (
    <>
      <HeaderComponent />
      <div class="h-max pb-16">
        {events.length === 0 ? (
          <div class="hero min-h-max">
            <div class="hero-content text-center">
              <div class="max-w-md">
                <p class="font-bold">No events 😭</p>
              </div>
            </div>
          </div>
        ) : (
          events.map((obj) => {
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
            } else if (obj.title.includes("Provider")) {
              obj.eventIcon = faUserDoctor;
            }

            return (
              <NavRow
                icon={obj.eventIcon}
                title={obj.title}
                description={obj.description}
                buttonText="Dismiss"
                callback={() => {
                  delEvent(obj.uuid);
                  forceUpdate();
                }}
                color={obj.color}
                url={obj.url}
                buttonCallback={() => {
                  delEvent(obj.uuid);
                  forceUpdate();
                }}
              />
            );
          })
        )}

        <FooterComponent />
      </div>
    </>
  );
}

export default EventsPage;
