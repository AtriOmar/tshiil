import React, { useEffect, useState } from "react";
import ServicesSidebar from "./ServicesSidebar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer";
import SecondNav from "../SecondNav";

function ServicesLayout() {
  const location = useLocation();

  return (
    <div>
      <SecondNav />
      <div className="w-full py-32 flex items-center justify-center bg-gradient-to-r from-[#1C51CB] to-[#4E81F7] uppercase text-white text-6xl font-teko text-center px-3">
        {paths[location.pathname.toUpperCase()]}
      </div>
      <div className="w-full py-28 px-6">
        <div className="w-full m-auto max-w-[1200px] flex scr900:flex-row flex-col-reverse gap-10">
          {/* sidebar */}
          <div className="scr900:w-2/6 w-full relative">
            <ServicesSidebar />
          </div>
          {/* main content */}
          <div className="scr900:w-4/6 w-full py-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesLayout;

const paths = {
  "/SERVICES/WEB": "CRÉATION SITE WEB",
  "/SERVICES/MOBILE": "CRÉATION APPLICATION MOBILE",
  "/SERVICES/MARKETING": "MARKETING DIGITAL",
  "/SERVICES/DESIGN": "CONCEPTION GRAPHIQUE",
  "/SERVICES/PROJECTS": "ETUDES DE PROJETS",
  "/SERVICES/ADMINISTRATION": "SERVICES ADMINISTRATIFS",
  "/SERVICES/RELATIONS": "RELATIONS LOCALES ET INTERNATIONALES",
  "/SERVICES/MANPOWER": "PRISE EN CHARGE DE LA MAIN D'OEUVRE",
  "/SERVICES/LOGISTICS": "SERVICES LOGISTIQUE",
};
