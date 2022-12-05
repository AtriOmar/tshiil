import React, { useContext } from "react";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tshiil_logo_1 from "../images/tshiil_logo_1.png";
import { Link } from "react-router-dom";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ServicesDropdown from "./OurServicesPack/ServicesDropdown";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { UIContext } from "../contexts/UIProvider";

function SecondNav() {
  const { setMobileNavbarOpen } = useContext(UIContext);

  return (
    <div className="w-full bg-slate-100 ring-1 ring-slate-200 px-4">
      <div className="max-w-[1400px] m-auto py-6 relative">
        {/* logo and external links */}
        <div className="scr900:absolute scr900:left-[50%] scr900:translate-x-[-50%] flex items-center scr600:justify-center justify-between">
          <Link to="/">
            <img src={tshiil_logo_1} alt="tshiil_logo" className="h-14" />
          </Link>
          <FontAwesomeIcon
            icon={faBars}
            className="scr600:hidden block cursor-pointer"
            color="blue"
            size="2xl"
            onClick={() => setMobileNavbarOpen(true)}
          />
        </div>
        <header className="scr900:flex hidden justify-between items-center">
          <div className="flex px-6 py-4 bg-yellow-400 gap-4 rounded-full">
            <p>Follow us</p>
            <i>
              <a href="https://www.facebook.com/tshiil" target="blank">
                <FontAwesomeIcon icon={faFacebookF} size="lg" color="black" />
              </a>
            </i>
            <i>
              <a href="https://www.instagram.com/tshiilservices" target="blank">
                <FontAwesomeIcon icon={faInstagram} size="lg" color="black" />
              </a>
            </i>
            <i>
              <a href="https://www.linkedin.com/in/tshiil-services-7b718b23b" target="blank">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" color="black" />
              </a>
            </i>
          </div>
          <a href="tel:+21624090003" className="flex items-center gap-4 bg-yellow-400 px-6 py-4 rounded-full">
            <div className="bg-slate-100 rounded-full p-3">
              <LocalPhoneIcon />
            </div>
            <div>
              <p className="text-blue-800 font-thin text-sm">Numéro De Téléphone</p>
              <p className="text-blue-900 font-bold text-lg">+216 24 090 003</p>
            </div>
          </a>
        </header>
        {/* nav */}
        <nav className="scr600:flex hidden w-full justify-center mt-3">
          <ul className="flex gap-5 items-center font-cera font-bold text-blue-800 text-lg">
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
        </nav>
      </div>
    </div>
  );
}

export default SecondNav;
