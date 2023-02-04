import React from "react";
import HomePage from "./pages/client/homepage/homePage";
import EventsPage from "./pages/client/eventspage/eventsPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, 
  },
  {
    path: "/events",
    element: <EventsPage />,
  }
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
