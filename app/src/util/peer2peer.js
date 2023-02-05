import { Peer } from "peerjs";
import { addEvent } from "../pages/client/eventsPage/eventsPage";
import { GetUserID } from "./userData";
import { transferCode } from "./transferCodes";
import { useRecoilValue } from "recoil";
import secureLocalStorage from "react-secure-storage";

const peer = new Peer(GetUserID());

function addAuthorizedPeer(peerId) {
  var authorizedPeers = JSON.parse(
    secureLocalStorage.getItem("authorizedPeers")
  );
  if (!authorizedPeers) {
    authorizedPeers = [];
  }
  if (authorizedPeers.includes(peerId)) {
    return false;
  }
  console.log(authorizedPeers);
  authorizedPeers.push(peerId);
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
  if (!(authorizedPeers && authorizedPeers.includes(peerId)) | !authorizedPeers) {
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
          name: "John Doe",
          description: "This is a test user",
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
            if (addAuthorizedPeer(data.uuid)) {
              addEvent({
                title: `Added a Provider (${data.user.name})`,
                description: data.user.description,
                url: `/client/provider/${data.uuid}`,
                color: "btn-success",
              });
            }
          }
          break;
        default:
          break;
      }
    });
  });
}
