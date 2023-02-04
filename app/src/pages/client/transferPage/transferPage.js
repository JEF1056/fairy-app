import React from "react";
import HeaderComponent from "../../../components/client/header";
import FooterComponent from "../../../components/client/footer";
import QRCode from "react-qr-code";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { transferCode } from "../../../util/transferCodes";
import CountDownBadge from "../../../components/client/countDownBadge";
import { v4 as uuidv4 } from "uuid";
import { GetUserID } from "../../../util/userData";

function TransferPage() {
  const getTransferCode = useRecoilValue(transferCode);
  const callbackTransferCode = useRecoilCallback(({ set }) => () => {
    set(transferCode, uuidv4());
  });

  function GetTransferCode() {
    return JSON.stringify({ uuid: GetUserID(), code: getTransferCode });
  }

  return (
    <>
      <HeaderComponent />

      <div class="h-max pb-16 m-4">
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure className="m-4">
            <QRCode size={256} value={GetTransferCode()} />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Transfer code</h2>
            <CountDownBadge
              prefix="Expires in"
              suffix="seconds"
              callback={callbackTransferCode}
            />
            <p>Show this code to your medical provider.</p>
            <p>{GetTransferCode()}</p>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
}

export default TransferPage;
