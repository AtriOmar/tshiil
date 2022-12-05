import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Head from "./Head";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import ScrollUpButton from "./ScrollUpButton";

function WebsiteLayout() {
  const location = useLocation();

  // scrolling to the top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Head
        pageTitle="TSHIIL"
        pageDescription="TSHIIL est une société tunisienne propose des services novateurs qui visent à faciliter la vie de tout un chacun, particuliers comme professionnels. Elle s’adressant aussi bien aux Tunisiens résidents qu’aux étrangers. Cette société intervient dans divers domaines."
      />
      <MobileNavbar />
      <ScrollUpButton />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default WebsiteLayout;
