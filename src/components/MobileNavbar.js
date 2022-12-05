import { Transition } from "@headlessui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UIContext } from "../contexts/UIProvider";
import tshiil_logo_1 from "../images/tshiil_logo_1.png";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Icon({ dropdownOpen }) {
  return (
    <svg
      className={`${dropdownOpen ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function MobileNavbar() {
  const { mobileNavbarOpen, setMobileNavbarOpen } = useContext(UIContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  //   closing the dropdown whenever the navbar closes
  useEffect(() => {
    !mobileNavbarOpen && setDropdownOpen(false);
  }, [mobileNavbarOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen overflow-hidden z-[1000] ${
        mobileNavbarOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <Transition
        show={mobileNavbarOpen}
        enter="transition duration-1000"
        enterFrom="opacity-0 "
        enterTo="opacity-100 "
        leave="transition duration-1000"
        leaveFrom="opacity-100 "
        leaveTo="opacity-0 "
      >
        <div
          className="bg-[rgba(0,0,0,.5)] w-full h-screen absolute top-0 right-0 cursor-pointer"
          onClick={() => setMobileNavbarOpen(false)}
        ></div>
      </Transition>
      <Transition
        show={mobileNavbarOpen}
        enter="transition duration-1000"
        enterFrom="translate-x-full "
        enterTo="translate-x-0 "
        leave="transition duration-1000"
        leaveFrom="translate-x-0 "
        leaveTo="translate-x-full "
      >
        <div className="w-5/6 h-screen overflow-y-scroll absolute top-0 right-0 bg-white pt-8 pb-28 px-4 font-cera">
          {/* logo */}
          <div className="w-2/3 m-auto">
            <Link to="/" onClick={() => setMobileNavbarOpen(false)}>
              <img src={tshiil_logo_1} alt="tshiil_logo" className="w-full" />
            </Link>
          </div>
          {/* menu */}
          <ul className="divide-y mt-5">
            <li className="text-base text-slate-700 font-bold px-3 py-3">
              <Link to="/" onClick={() => setMobileNavbarOpen(false)}>
                Accueil
              </Link>
            </li>
            {/* Nos Services accordion */}
            <li className="">
              <Accordion open={dropdownOpen === true} icon={<></>}>
                <AccordionHeader
                  className={`text-base text-slate-700 font-bold pl-3 py-0 flex text-left ${
                    dropdownOpen ? "border-b" : "border-0"
                  }`}
                >
                  <Link to="/services" onClick={() => setMobileNavbarOpen(false)}>
                    Nos Services
                  </Link>
                  <i
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="ml-auto border-l-2 border-slate-300 px-4 py-3 translate-x-4"
                  >
                    <Icon dropdownOpen={dropdownOpen} />
                  </i>
                </AccordionHeader>
                <AccordionBody className={`px-6 py-2 text-base font-bold text-slate-600`}>
                  <ul className="divide-y">
                    {servicesArr.map((service, index) => (
                      <Link
                        key={index}
                        to={service.pagePath}
                        className="block py-2"
                        onClick={() => setMobileNavbarOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </ul>
                </AccordionBody>
              </Accordion>
            </li>
            <li className="text-base text-slate-700 font-bold px-3 py-3  ">
              <Link to="/valeurs" onClick={() => setMobileNavbarOpen(false)}>
                Nos Valeurs
              </Link>
            </li>
            <li className="text-base text-slate-700 font-bold px-3 py-3">
              <Link to="/contact" onClick={() => setMobileNavbarOpen(false)}>
                Contact
              </Link>
            </li>
            <li className="text-base text-slate-700 font-bold px-3 py-3">
              <Link to="/devis" onClick={() => setMobileNavbarOpen(false)}>
                Demander Un Devis
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default MobileNavbar;

const servicesArr = [
  {
    title: "Création Site Web",
    pagePath: "/services/web",
  },
  {
    title: "Création Application Mobile",
    pagePath: "/services/mobile",
  },
  {
    title: "Marketing Digital",
    pagePath: "/services/marketing",
  },
  {
    title: "Conception Graphique",
    pagePath: "/services/design",
  },
  {
    title: "Etudes De Projets",
    pagePath: "/services/projects",
  },
  {
    title: "Services Administratifs",
    pagePath: "/services/administration",
  },
  {
    title: "Relations Locales Et Internationales",
    pagePath: "/services/relations",
  },
  // {
  //   title: "Prise En Charge De La Main D’œuvre",
  //   pagePath: "/services/manpower",
  // },
  {
    title: "Services Logistique",
    pagePath: "/services/logistics",
  },
];
