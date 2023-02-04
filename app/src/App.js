import React from "react";
import HomePage from "./pages/patient/homePage/homePage";
import EventsPage from "./pages/patient/eventsPage/eventsPage";
import TransferPage from "./pages/patient/transferPage/transferPage";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    <RecoilRoot>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </RecoilRoot>
  );
}

export default App;
