import React from "react";
import relations_pic_01 from "../../images/relations_pic_01.jpg";
import relations_pic_02 from "../../images/relations_pic_02.jpg";
import relations_pic_03 from "../../images/relations_pic_03.jpg";
import relations_pic_04 from "../../images/relations_pic_04.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Head from "../Head";

function RelationsServiceContent() {
  return (
    <div>
      <Head pageTitle="TSHIIL | Relations" />
      <h1 className="text-5xl font-semibold text-slate-900 font-teko scr900:text-left text-center">
        TSHIIL vous aide à prospérer votre projet.
      </h1>
      <img src={relations_pic_01} alt="" className="w-full mt-6" />
      <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-6">
        Nous pouvons s'occuper de connecter les relations locales et internationales afin de:
      </p>
      <div className="flex gap-3 mt-6">
        <div>
          <img src={relations_pic_02} alt="" className="w-full" />
        </div>
        <div>
          <img src={relations_pic_04} alt="" className="w-full" />
        </div>
      </div>
      <div className="flex scr600:flex-row flex-col items-center">
        <ul className="scr600:w-1/2 w-full">
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">
              Développer rapidement votre business.
            </p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">Vous ouvrir au monde.</p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">
              Faire évoluer la dynamique de votre entreprise.
            </p>
          </li>
        </ul>
        <div className="scr600:w-1/2 w-2/3 scr600:mt-0 mt-3">
          <img src={relations_pic_03} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default RelationsServiceContent;
