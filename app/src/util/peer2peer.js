import { Peer } from "peerjs";
import { addEvent } from "../pages/client/eventsPage/eventsPage";
import { GetUserID } from "./userData";
import { transferCode } from "./transferCodes";
import { RecoilGet } from "./recoilUtils";

const peer = new Peer(GetUserID());

export function ConnectToPeer(peerId, authCode) {
  const conn = peer.connect(peerId);
  conn.on("open", () => {
    conn.send(
      JSON.stringify({
        intent: "auth",
        code: authCode,
        uuid: GetUserID(),
      })
    );
  });
}

export function Peer2PeerHandler() {
  peer.on("connection", (conn) => {
    conn.on("data", (data) => {
      data = JSON.parse(data);
      console.log(data)
      switch (data.intent) {
        case "auth":
          if (data.code === RecoilGet(transferCode)) {
            addEvent({
              title: "Peer2Peer",
              description: "authorized " + data.uuid,
            });
          } else {
            addEvent({
              title: "Peer2Peer",
              description: "unauthorized " + data.uuid,
            });
          }
          break;
        default:
          break;
      }
    });
  });
}
