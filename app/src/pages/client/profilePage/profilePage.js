import React from "react";
import HeaderComponent from "../../../components/client/header";
import FooterComponent from "../../../components/client/footer";
import NavRow from "../../../components/client/navRow";

function ProfilePage() {
  return (
    <>
      <HeaderComponent />

      <div class="h-max pb-16">
        <div class="card w-50 bg-base-100 shadow-xl m-10">
          <figure class="px-10 pt-10">
            <img
              src="jess.png"
              class="rounded-x1"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h1 class="card-title">Jess Fan</h1>
            <div class="overflow-x-auto">
              <table class="table table-compact">
                <br></br>
                <thead>
                  <th>Personal Information</th>
                </thead>
                <tbody>
                  <tr>
                    <th>Sex</th>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <th>Preferred Gender</th>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <th>Ethnicity</th>
                    <td>Chinese</td>
                  </tr>
                  <tr>
                    <th>Race</th>
                    <td>Asian</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>111 CruzHacks Way</td>
                  </tr>
                  <tr>
                    <th>Emergency Contact</th>
                    <td>408-131-5829</td>
                  </tr>
                </tbody>
                <br></br>
                <br></br>
                <thead>
                  <th>Medical Information</th>
                </thead>
                <tbody>
                  <tr>
                    <th>Allergies</th>
                    <td>Peanuts, Pollen, and Soy</td>
                  </tr>
                  <tr>
                    <th>Medical History</th>
                    <td>ADD/ADHD, Asthma, COVID-19</td>
                  </tr>
                  <tr>
                    <th>Current Medications</th>
                    <td>None</td>
                  </tr>
                  <tr>
                    <th>Dietary Restrictions</th>
                    <td>Peanuts, Soy, Lactose, Meat</td>
                  </tr>
                </tbody>
                <br></br>
                <br></br>
                <thead>
                  <th>Insurance Information</th>
                </thead>
                <tbody>
                  <tr>
                    <th>Insurance Carrier</th>
                    <td>Anthem Blue Cross</td>
                  </tr>
                  <tr>
                    <th>Policy Number</th>
                    <td>12091342</td>
                  </tr>
                  <tr>
                    <th>Group Number</th>
                    <td>02-90700</td>
                  </tr>
                  <tr>
                    <th>Insured's Name</th>
                    <td>Jess Fan</td>
                  </tr>
                  <tr>
                    <th>Member ID</th>
                    <td>BJX34322</td>
                  </tr>
                  <tr>
                    <th>Insurance Card</th>
                    <td>
                      <img src="#"></img>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
}

export default ProfilePage;
