import React from "react";
import HeaderComponent from "../../../components/header";
import FooterComponent from "../../../components/footer";
import NavRow from "../../../components/navRow";
import QRCode from "react-qr-code";
import { GetUserID } from "../../../util/userData";

function TransferPage() {
  return (
    <>
      <HeaderComponent />

      <div class="h-max pb-16 m-4">
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure className="m-4">
            <QRCode size={256} value={GetUserID()} />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Transfer code</h2>
            <span class="badge">
              <p>{"Valid for "}</p>
              <span class="countdown">
                <span style={{ "--value": 56 }}></span>
              </span>
              s
            </span>
            <p>Show this code to your medical provider.</p>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
}

export default TransferPage;
