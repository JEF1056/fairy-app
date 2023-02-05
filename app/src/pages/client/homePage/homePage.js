import React from "react";
import HeaderComponent from "../../../components/client/header";
import FooterComponent from "../../../components/client/footer";
import NavRow from "../../../components/client/navRow";
import {
  faArrowRightArrowLeft,
  faCapsules,
  faHouseMedical,
  faCalendarDay,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <>
      <HeaderComponent />

      <div class="h-max pb-16">
        <NavRow
          icon={faArrowRightArrowLeft}
          title="Export Data"
          url="/client/transfer"
          description="Transfer from one medical provider to another"
        />

        <NavRow
          icon={faCalendarDay}
          title="View Appointments"
          description="See appointments and converse with your doctor"
        />

        <NavRow
          icon={faUserDoctor}
          title="View Nearby Facilities"
          description="See nearby facilities and their contact information"
        />

        <NavRow
          icon={faCapsules}
          title="View Medications"
          description="See prescriptions and medication schedule"
        />

        <NavRow
          icon={faHouseMedical}
          title="View Nearby Pharmacies"
          description="See nearby pharmacies and their contact information"
        />
      </div>

      <FooterComponent />
    </>
  );
}

export default HomePage;
