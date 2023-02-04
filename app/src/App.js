import React from "react";
import HomePage from "./pages/client/homePage/homePage";
import OnBoardingPage from "./pages/client/onboardingPage/onboardingPage";
import EventsPage from "./pages/client/eventsPage/eventsPage";
import TransferPage from "./pages/client/transferPage/transferPage";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OnBoardingPage />,
  },
  {
    path: "/client",
    element: <HomePage />,
  },
  {
    path: "/client/events",
    element: <EventsPage />,
  },
  {
    path: "/client/transfer",
    element: <TransferPage />,
  },
]);

function App() {
  return (
    <RecoilRoot>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </RecoilRoot>
  );
}

export default App;
