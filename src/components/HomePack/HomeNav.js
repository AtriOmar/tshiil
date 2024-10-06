import React, { useContext } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useState } from "react";
import tshiilLogo1 from "../../images/tshiil_logo_1.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServicesDropdown from "../OurServicesPack/ServicesDropdown";
import { Link } from "react-router-dom";
import { UIContext } from "../../contexts/UIProvider";
import { ReactComponent as LogoPolygon } from "../../images/logo_polygon.svg";

function HomeNav() {
  const [hoveringDemanderDevis, setHoveringDemanderDevis] = useState(false);
  const { setMobileNavbarOpen } = useContext(UIContext);

  return (
    <div className="flex scr1000:flex-row flex-col justify-between items-center scr1000:gap-0 gap-7 px-4 py-12 max-w-[1400px] m-auto">
      <Link to="/">
        <div className="relative h-14 ">
          <LogoPolygon
            preserveAspectRatio="none"
            className="w-[200%] h-[180%] z-[-1] absolute top-[50%] left-[50%] translate-y-[-40%] translate-x-[-52%]"
            fill="white"
            style={{ filter: "drop-shadow(3px 5px 3px rgb(0 0 0 / 0.3))" }}
          />
          <img src={tshiilLogo1} alt="tshiil_logo" className="h-full" />
        </div>
      </Link>
      <div className="scr1000:w-auto w-full justify-between flex gap-5 items-center">
        <FontAwesomeIcon icon={faBars} className="scr800:hidden block cursor-pointer" color="white" size="2xl" onClick={() => setMobileNavbarOpen(true)} />
        <ul className="scr800:flex hidden gap-5 items-center text-white font-cera text-xl font-bold">
          <li className="">
            <Link to="/">Accueil</Link>
          </li>
          <li className="">
            <ServicesDropdown arrowColor="white" />
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
            className="text-blue-900 hover:text-white transition duration-500 font-cera text-base font-black px-8 py-4 rounded-[50px] bg-white cursor-pointer relative overflow-hidden flex items-center justify-center"
            onMouseEnter={() => setHoveringDemanderDevis(true)}
            onMouseLeave={() => setHoveringDemanderDevis(false)}
          >
            <div
              className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-blue-900 h-full ${
                hoveringDemanderDevis ? "w-full" : "w-1/3 opacity-0"
              }`}
              style={{ transition: ".5s" }}
            ></div>
            <p className="z-10">DEMANDER UN DEVIS</p>
          </div>
        </Link>
        <a href="tel:+21624090003" className="min-[1180px]:flex hidden items-center gap-4">
          <div className="bg-slate-100 rounded-full p-3">
            <LocalPhoneIcon />
          </div>
          <div>
            <p className="text-white font-normal text-sm">Numéro De Téléphone</p>
            <p className="text-white font-bold text-lg">+216 24 090 003</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default HomeNav;
