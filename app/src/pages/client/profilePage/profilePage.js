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
              src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
              alt="Shoes"
              class="rounded-x1"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h1 class="card-title">Jess Fan</h1>
            <div class="overflow-x-auto">
              <table class="table table-compact w-full">
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
                    <th>Emergency Contact Phone Number</th>
                    <td>111-111-1111</td>
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
