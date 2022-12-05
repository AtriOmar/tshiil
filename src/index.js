import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UIProvider from "./contexts/UIProvider";
import OurValues from "./components/OurValues";
import OurServices from "./components/OurServices";
import ServicesLayout from "./components/ServicesPages/ServicesLayout";
import WebDebServiceContent from "./components/ServicesPages/WebDebServiceContent";
import MobileDevServiceContent from "./components/ServicesPages/MobileDevServiceContent";
import MarketingServiceContent from "./components/ServicesPages/MarketingServiceContent";
import DesignServiceContent from "./components/ServicesPages/DesignServiceContent";
import ProjectStudyServiceContent from "./components/ServicesPages/ProjectStudyServiceContent";
import AdministrativeServiceContent from "./components/ServicesPages/administrativeServiceContent";
import RelationsServiceContent from "./components/ServicesPages/RelationsServiceContent";
import ManPowerServiceContent from "./components/ServicesPages/ManPowerServiceContent";
import LogisticsServiceContent from "./components/ServicesPages/LogisticsServiceContent";
import OurTeam from "./components/OurTeam";
import ContactUs from "./components/ContactUs";
import WebsiteLayout from "./components/WebsiteLayout";
import DemandeDevis from "./components/DemandeDevis";
import PageNotFound from "./components/PageNotFound";
import { HelmetProvider } from "react-helmet-async";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    element: <WebsiteLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/valeurs",
        element: <OurValues />,
      },
      {
        path: "/services",
        element: <OurServices />,
      },
      {
        path: "/services",
        element: <ServicesLayout />,
        children: [
          {
            path: "web",
            element: <WebDebServiceContent />,
          },
          {
            path: "mobile",
            element: <MobileDevServiceContent />,
          },
          {
            path: "marketing",
            element: <MarketingServiceContent />,
          },
          {
            path: "design",
            element: <DesignServiceContent />,
          },
          {
            path: "projects",
            element: <ProjectStudyServiceContent />,
          },
          {
            path: "administration",
            element: <AdministrativeServiceContent />,
          },
          {
            path: "relations",
            element: <RelationsServiceContent />,
          },
          // {
          //   path: "manpower",
          //   element: <ManPowerServiceContent />,
          // },
          {
            path: "logistics",
            element: <LogisticsServiceContent />,
          },
        ],
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "devis",
        element: <DemandeDevis />,
      },
      // {
      //   path: "/team/:id",
      //   element: <OurTeam />,
      // },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <UIProvider>
        <RouterProvider router={router} />
      </UIProvider>
    </HelmetProvider>
  </React.StrictMode>
);
