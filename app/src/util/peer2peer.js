import { Peer } from "peerjs";
import { addEvent } from "../pages/client/eventsPage/eventsPage";
import { GetUserID } from "./userData";
import { transferCode } from "./transferCodes";
import { useRecoilValue } from "recoil";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router";

const peer = new Peer(GetUserID());

function addAuthorizedPeer(peerId, userData) {
  var authorizedPeers = JSON.parse(
    secureLocalStorage.getItem("authorizedPeers")
  );
  if (!authorizedPeers) {
    authorizedPeers = {};
  }
  if (Object.keys(authorizedPeers).includes(peerId)) {
    return false;
  }

  authorizedPeers[peerId] = userData;
  console.log(authorizedPeers);

  secureLocalStorage.setItem(
    "authorizedPeers",
    JSON.stringify(authorizedPeers)
  );

  return true;
}

function delAuthorizedPeer(peerId) {
  var authorizedPeers = JSON.parse(
    secureLocalStorage.getItem("authorizedPeers")
  );
  if (
    !(authorizedPeers && authorizedPeers.includes(peerId)) | !authorizedPeers
  ) {
    return;
  }
  const index = authorizedPeers.indexOf(peerId);
  if (index > -1) {
    authorizedPeers.splice(index, 1);
  }
  secureLocalStorage.setItem(
    "authorizedPeers",
    JSON.stringify(authorizedPeers)
  );
}

export function ConnectToPeer(peerId, authCode) {
  const conn = peer.connect(peerId);
  conn.on("open", () => {
    conn.send(
      JSON.stringify({
        intent: "auth",
        code: authCode,
        uuid: GetUserID(),
        user: {
          image: "/pluto.jpg",
          name: "Pluto",
          tag: "Emotional Support Animal",
          company: "Home",
          role: "Land cloud",
        },
      })
    );
  });
}

export function Peer2PeerHandler() {
  const getTransferCode = useRecoilValue(transferCode);

  peer.on("connection", (conn) => {
    conn.on("data", (data) => {
      data = JSON.parse(data);
      switch (data.intent) {
        case "auth":
          if (data.code === getTransferCode) {
            if (addAuthorizedPeer(data.uuid, data.user)) {
              addEvent({
                title: `Added a Provider (${data.user.name})`,
                description: data.user.name,
                url: `/client/provider/${data.uuid}`,
                color: "btn-success",
              });
              window.location.reload();
            }
          }
          break;
        default:
          break;
      }
    });
  });
}
