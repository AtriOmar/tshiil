import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import React from "react";

function ContactInfo() {
  return (
    <div className="w-full bg-gradient-to-l from-[#4D80F6] to-[#1D51CB] py-20 px-4">
      <ul className="m-auto  w-fit scr900:w-full max-w-[1200px] flex scr900:flex-row flex-col items-start scr900:items-center justify-between gap-4">
        <li className="flex items-center gap-3">
          <i className="bg-slate-100 rounded-[50%] w-14 h-14 flex items-center justify-center">
            <LocalPhoneIcon />
          </i>
          <div>
            <a
              href="tel:+21621070003"
              className="block text-white hover:text-blue-900 transition duration-300 font-normal text-base"
            >
              +216 21 070 003
            </a>
            <a
              href="tel:+21675648858"
              className="block text-white hover:text-blue-900 transition duration-300 font-normal text-base"
            >
              +216 75 648 858
            </a>
          </div>
        </li>
        <li className="flex items-center gap-3">
          <i className="bg-slate-100 rounded-[50%] w-14 h-14 flex items-center justify-center">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </i>
          <div>
            <a
              href="mailto:contact@tshiil.com"
              className="block text-white hover:text-blue-900 transition duration-300 font-normal text-base"
            >
              contact@tshiil.com
            </a>
            <a
              href="mailto:commercial@tshiil.com"
              className=" block text-white hover:text-blue-900 transition duration-300 font-normal text-base"
            >
              commercial@tshiil.com
            </a>
          </div>
        </li>
        <li className="flex items-center gap-3 flex-nowrap">
          <i className="bg-slate-100 rounded-[50%] w-14 h-14 flex items-center justify-center">
            <FontAwesomeIcon icon={faLocationDot} size="xl" />
          </i>
          <div className="text-white font-normal text-base basis-40 grow">Route Tataouine Imm.Sghair, 4100 Mednine</div>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
