import React, { useState } from "react";
import QrReader from "react-web-qr-reader";
import { ConnectToPeer } from "../../../util/peer2peer";
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
      console.log(JSON.parse(result.data).uuid)
      ConnectToPeer(JSON.parse(result.data).uuid)
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
    </>
  );
};

export default HomePage;
