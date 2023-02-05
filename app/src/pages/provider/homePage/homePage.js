import React, { useState } from "react";
import QrReader from "react-web-qr-reader";
import {
  ConnectToPeer,
  SendAppointmentReminder,
} from "../../../util/peer2peer";
import { addEvent } from "../../client/eventsPage/eventsPage";

const HomePage = () => {
  const delay = 500;

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const [result, setResult] = useState("No result");

  const handleScan = (result) => {
    if (result) {
      setResult(result);
      result = JSON.parse(result.data);
      ConnectToPeer(result.uuid, result.code);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>{JSON.stringify(result.data)}</p>
      <button
        class="btn btn-wide"
        onClick={() => {
          SendAppointmentReminder();
        }}
      >
        Send appointment
      </button>
    </>
  );
};

export default HomePage;
