import React from "react";
import HeaderComponent from "../../../components/client/header";
import FooterComponent from "../../../components/client/footer";
import NavRow from "../../../components/client/navRow";

function ProfilePage() {
  return (
    <>
      <HeaderComponent />

      <div class="h-max pb-16">
        {/*for now just have a place to store info, link it up later
        legal name
        name
        sex
        preferred gender
        race
        ethnicity
        phone
        address
        
        */}
        
        <NavRow
        //   icon={faArrowRightArrowLeft}
          title="Export Data"
          url="/client/transfer"
          description="Transfer from one medical provider to another"
        />

        <NavRow
        //   icon={faCapsules}
          title="View Medications"
          description="See prescriptions and medication schedule"
        />
      </div>

      <FooterComponent />
    </>
  );
}

export default ProfilePage;
