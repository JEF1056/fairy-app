import React from "react";
import ClientHomePage from "./pages/client/homePage/homePage";
import ClientOnBoardingPage from "./pages/client/onboardingPage/onboardingPage";
import ClientEventsPage from "./pages/client/eventsPage/eventsPage";
import ClientProfilePage from "./pages/client/profilePage/profilePage"
import ClientTransferPage from "./pages/client/transferPage/transferPage";
import ProviderHomePage from "./pages/provider/homePage/homePage";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Peer2PeerHandler } from "./util/peer2peer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClientOnBoardingPage />,
  },
  {
    path: "/client",
    element: <ClientHomePage />,
  },
  {
    path: "/client/events",
    element: <ClientEventsPage />,
  },
  {
    path: "/client/profile",
    element: <ClientProfilePage />,
  },
  {
    path: "/client/transfer",
    element: <ClientTransferPage />,
  },
  {
    path: "/provider",
    element: <ProviderHomePage />,
  },
]);

function App() {
  return (
    <RecoilRoot>
      <React.StrictMode>
        <Peer2PeerHandler />
        <RouterProvider router={router} />
      </React.StrictMode>
    </RecoilRoot>
  );
}

export default App;
