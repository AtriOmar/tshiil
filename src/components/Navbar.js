import React, { Fragment, useContext } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useState } from "react";
import tshiilLogo1 from "../images/tshiil_logo_1.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServicesDropdown from "./OurServicesPack/ServicesDropdown";
import { Link } from "react-router-dom";
import { UIContext } from "../contexts/UIProvider";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [hoveringDemanderDevis, setHoveringDemanderDevis] = useState(false);
  const { windowScroll, setMobileNavbarOpen } = useContext(UIContext);

  return (
    <Transition
      show={windowScroll > 140}
      as={Fragment}
      enter="transition linear duration-1000"
      enterFrom="translate-y-[-100%] opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="transition linear duration-1000"
      leaveFrom="translate-y-0 opacity-100"
      leaveTo="translate-y-[-100%] opacity-0"
    >
      <div className="bg-white w-full fixed top-0 left-0 z-[999] shadow">
        <div className="flex flex-row justify-between items-center  px-4 py-4 max-w-[1400px] m-auto">
          <div>
            <Link to="/">
              <img src={tshiilLogo1} alt="tshiil_logo" className="h-14" />
            </Link>
          </div>
          <div className="w-auto  justify-between flex gap-5 items-center">
            <FontAwesomeIcon
              icon={faBars}
              className="cursor-pointer min-[730px]:hidden block"
              color="blue"
              size="2xl"
              onClick={() => setMobileNavbarOpen(true)}
            />
            <ul className="min-[730px]:flex hidden gap-5 items-center text-blue-800 font-cera text-xl font-bold">
              <li className="">
                <Link to="/">Accueil</Link>
              </li>
              <li className="">
                <ServicesDropdown />
              </li>
              <li className="">
                <Link to="/valeurs">Nos Valeurs</Link>
              </li>
              <li className="">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <Link to="/devis">
              <div
                className="scr1000:flex hidden items-center justify-center text-white bg-blue-900 hover:text-white font-cera text-base font-black px-8 py-4 rounded-[50px] cursor-pointer relative overflow-hidden"
                onMouseEnter={() => setHoveringDemanderDevis(true)}
                onMouseLeave={() => setHoveringDemanderDevis(false)}
              >
                <div
                  className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-blue-600 h-full ${
                    hoveringDemanderDevis ? "w-full" : "w-1/3 opacity-0"
                  }`}
                  style={{ transition: ".5s" }}
                ></div>
                <p className="z-10">DEMANDER UN DEVIS</p>
              </div>
            </Link>
            <a href="tel:+21624090003" className="min-[1160px]:flex hidden items-center gap-4">
              <div className="bg-slate-100 rounded-full p-3">
                <LocalPhoneIcon />
              </div>
              <div>
                <p className="text-blue-800 font-normal text-sm">Numéro De Téléphone</p>
                <p className="text-blue-900 font-bold text-lg">+216 24 090 003</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default Navbar;
