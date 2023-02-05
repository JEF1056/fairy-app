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

  var fakeData = [
    {
      image: "/jess.png",
      name: "Jess",
      company: "🅱️oogle",
      role: "Computer Doctor, fixer of random bugs",
    },
    {
      image: "/brian.jpg",
      name: "Brian",
      company: "❌D",
      role: "Professional mind boggler",
    },
    {
      image: "/alison.png",
      name: "Alison",
      company: "Your mom",
      role: "Roast master",
    },
    {
      image: "/aisha.jpg",
      name: "Aisha",
      company: "MediFae, inc.",
      role: "Biggest brain",
    },
  ];

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
          </div>
        </div>
      </div>

      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((obj) => (
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={obj.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{obj.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {obj.company}
                  <br />
                  <span class="badge badge-ghost badge-sm">{obj.role}</span>
                </td>
                <th>
                  <button class="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <FooterComponent />
    </>
  );
}

export default TransferPage;
