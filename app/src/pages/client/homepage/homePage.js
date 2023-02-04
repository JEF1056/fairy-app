import React from "react";
import HeaderComponent from "../../../components/header";
import FooterComponent from "../../../components/footer";
import NavRow from "../../../components/navRow";
import {
  faArrowRightArrowLeft,
  faCapsules,
} from "@fortawesome/free-solid-svg-icons";

function HomePage() {
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

export default HomePage;
