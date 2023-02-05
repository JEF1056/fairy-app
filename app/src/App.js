import React from "react";
import ClientHomePage from "./pages/client/homePage/homePage";
import ClientOnBoardingPage from "./pages/client/onboardingPage/onboardingPage";
import ClientEventsPage from "./pages/client/eventsPage/eventsPage";
import ClientTransferPage from "./pages/client/transferPage/transferPage";
import ProviderHomePage from "./pages/provider/homePage/homePage";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { RecoilUtilsComponent } from "./util/recoilUtils";

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
        <RecoilUtilsComponent />
        <RouterProvider router={router} />
      </React.StrictMode>
    </RecoilRoot>
  );
}

export default App;
