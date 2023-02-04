import { Peer } from "peerjs";
import { addEvent } from "../pages/client/eventsPage/eventsPage";
import { GetUserID } from "./userData";

const peer = new Peer(GetUserID());

export function ConnectToPeer(peerId, authCode) {
  const conn = peer.connect(peerId);
  conn.on("open", () => {
    conn.send("Doctor -> Patient");
  });
}

peer.on("connection", (conn) => {
  conn.on("data", (data) => {
    // Will print 'hi!'
    addEvent({ title: "Peer2Peer", description: data });
  });
  conn.on("open", () => {
    conn.send("Patient -> Doctor");
  });
});
