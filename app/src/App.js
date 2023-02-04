import React from "react";
import HomePage from "./pages/patient/homePage/homePage";
import OnBoardingPage from "./pages/patient/onboardingPage/onboardingPage";
import EventsPage from "./pages/patient/eventsPage/eventsPage";
import TransferPage from "./pages/patient/transferPage/transferPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OnBoardingPage />,
  },
  {
    path: "/patient",
    element: <HomePage />,
  },
  {
    path: "/patient/events",
    element: <EventsPage />,
  },
  {
    path: "/patient/transfer",
    element: <TransferPage />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
