import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const UIContext = React.createContext();

function UIProvider({ children }) {
  const [windowScroll, setWindowScroll] = useState(window.scrollY);
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

  // updating the window scroll
  function handleScroll() {
    setWindowScroll(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // preventing the interaction with the application when the MobileNavbar is open
  useEffect(() => {
    if (mobileNavbarOpen) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "visible";
    }
  }, [mobileNavbarOpen]);

  const value = { windowScroll, mobileNavbarOpen, setMobileNavbarOpen };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export default UIProvider;
