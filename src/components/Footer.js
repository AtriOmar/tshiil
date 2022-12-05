import React from "react";
import footer_background from "../images/footer_background_2.png";
import tshiil_logo_1 from "../images/tshiil_logo_1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={`w-full bg-cover`} style={{ backgroundImage: `url(${footer_background})` }}>
      {/* first div is for the background, second is for the max width, third is container, the other two containers 
      are to group the elements 2 by 2, we don't want the image to be alone in the second row */}
      <div className="max-w-[1300px] m-auto">
        <div
          className={`scr600:px-4 px-10 py-20 grid scr700:grid-cols-3 scr600:grid-cols-2 grid-cols-1 scr600:gap-6 gap-10`}
        >
          <div className="">
            <Link to="/">
              <img src={tshiil_logo_1} alt="" className="w-4/5" />
            </Link>
            <p className="text-base font-normal font-dm_sans text-white mt-8">
              TSHIIL est une société tunisienne de services spécialisée dans divers domaines.
            </p>
            <ul className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/tshiil"
                target="blank"
                className="w-11 h-11 rounded-[50%] bg-white flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" color="darkblue" />
              </a>
              <a
                href="https://www.instagram.com/tshiilservices"
                target="blank"
                className="w-11 h-11 rounded-[50%] bg-white flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" color="darkblue" />
              </a>
              <a
                href="https://www.linkedin.com/in/tshiil-services-7b718b23b"
                target="blank"
                className="w-11 h-11 rounded-[50%] bg-white flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" color="darkblue" />
              </a>
            </ul>
          </div>
          <div className="">
            <h1 className="font-normal font-teko text-white text-3xl capitalize mt-4">Accès Rapide</h1>
            <ul className="text-base font-normal font-dm_sans text-white capitalize mt-6 flex flex-col gap-4 ">
              <li>
                <Link to="/" className="hover:text-blue-600 transition duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 transition duration-200">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link to="/valeurs" className="hover:text-blue-600 transition duration-200">
                  Nos Valeurs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/devis" className="hover:text-blue-600 transition duration-200">
                  Demander Un Devis
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="font-normal font-teko text-white text-3xl capitalize mt-4">Contactez Nous</h1>
            <ul className="mt-6 flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faLocationDot} size="xl" color="white" />

                <p className="text-base font-normal font-dm_sans text-white">
                  Route tataouine Imm.Sghair, 4100 Mednine
                </p>
              </li>
              <li className="">
                <a href="mailto:contact@tshiil.com" className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} size="xl" color="white" />

                  <p className="text-base font-normal font-dm_sans text-sky-300 hover:text-blue-600 transition duration-300">
                    contact@tshiil.com
                  </p>
                </a>
              </li>
              <li className="">
                <a href="tel:+21624090003" className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} size="xl" color="white" />

                  <p className="text-base font-normal font-dm_sans text-sky-300 hover:text-blue-600 transition duration-300">
                    +216 24 090 003
                  </p>
                </a>
              </li>
              <li className="">
                <a href="tel:+21621070003" className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} size="xl" color="white" />

                  <p className="text-base font-normal font-dm_sans text-sky-300 hover:text-blue-600 transition duration-300">
                    +216 21 070 003
                  </p>
                </a>
              </li>
              <li className="">
                <a href="tel:+21675648858" className="flex items-center gap-3">
                  {ROTARY_PHONE_SVG}

                  <p className="text-base font-normal font-dm_sans text-sky-300 hover:text-blue-600 transition duration-300">
                    +216 75 648 858
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="font-dm_sans text-white font-normal text-base text-center pb-6 px-4">
          COPYRIGHT@TSHIIL SERVICES. TOUS LES DROITS SONT RÉSERVÉS
        </p>
      </div>
    </div>
  );
}

export default Footer;

const ROTARY_PHONE_SVG = (
  <svg version="1.1" x="0px" y="0px" viewBox="0 0 18.11 15.45" width="28px">
    <g>
      <path
        fill="white"
        d="M8.98,13.96c-1.59,0-3.17,0-4.76,0c-0.43,0-0.8-0.15-1.08-0.49c-0.2-0.24-0.28-0.53-0.29-0.83
		c-0.01-0.3,0-0.61,0-0.91c0-0.3,0.09-0.59,0.24-0.85C4,9.29,4.92,7.7,5.84,6.1c0.28-0.48,0.68-0.79,1.24-0.89
		C7.19,5.2,7.31,5.19,7.42,5.19c1.04,0,2.08,0,3.12,0c0.46,0,0.87,0.13,1.22,0.44c0.16,0.14,0.3,0.3,0.4,0.48
		c0.91,1.59,1.82,3.18,2.72,4.77c0.15,0.26,0.23,0.54,0.24,0.84c0.01,0.33,0.02,0.66,0,0.99c-0.06,0.77-0.61,1.25-1.36,1.26
		C12.17,13.96,10.57,13.96,8.98,13.96z M8.98,11.33c1.13-0.02,1.96-0.87,1.97-1.96c0-1.09-0.81-1.97-1.96-1.98
		c-1.12,0-1.97,0.83-1.97,1.97C7.01,10.47,7.85,11.3,8.98,11.33z"
      />
      <path
        fill="white"
        d="M3.35,6.5C3.16,6.5,2.93,6.52,2.7,6.49C2.3,6.45,1.98,6.12,1.97,5.71C1.96,5.36,1.96,5.02,1.96,4.67
		c0-0.26,0.11-0.47,0.31-0.64c0.25-0.22,0.52-0.41,0.8-0.58c0.72-0.44,1.45-0.84,2.24-1.14C5.92,2.09,6.55,1.94,7.2,1.84
		c0.62-0.09,1.24-0.17,1.87-0.15c1.03,0.03,2.05,0.16,3.04,0.45c0.58,0.17,1.12,0.41,1.66,0.69c0.62,0.32,1.22,0.65,1.77,1.08
		c0.11,0.09,0.21,0.18,0.3,0.29C15.96,4.33,16,4.51,16,4.69c0,0.35,0.02,0.7-0.01,1.05c-0.03,0.39-0.34,0.71-0.72,0.75
		C14.91,6.53,14.56,6.5,14.2,6.5c-0.15,0-0.29,0-0.43-0.03c-0.32-0.07-0.52-0.27-0.64-0.57c-0.16-0.4-0.32-0.8-0.47-1.2
		c-0.11-0.29-0.3-0.48-0.59-0.58c-0.53-0.18-1.07-0.3-1.62-0.37c-0.59-0.08-1.19-0.12-1.79-0.1C7.77,3.7,6.87,3.82,6,4.09
		C5.79,4.16,5.59,4.24,5.46,4.44C5.41,4.51,5.37,4.59,5.34,4.67c-0.17,0.41-0.34,0.82-0.5,1.23C4.67,6.29,4.36,6.5,3.93,6.5
		C3.75,6.51,3.57,6.5,3.35,6.5z"
      />
    </g>
  </svg>
);
