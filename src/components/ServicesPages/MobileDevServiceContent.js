import React, { Fragment, useState } from "react";
import mobile_pic_01 from "../../images/mobile_pic_01.jpg";
import mobile_pic_02 from "../../images/mobile_pic_02.jpg";
import mobile_pic_03 from "../../images/mobile_pic_03.jpg";
import mobile_pic_04 from "../../images/mobile_pic_04.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Head from "../Head";

function MobileDevServiceContent() {
  return (
    <div>
      <Head
        pageTitle="TSHIIL | Mobile"
        pageDescription="TSHIIL vous garantit une application mobile sur mesure compatible avec vos besoin pour proposer une collection de fonctionnalités à vos clients et faciliter la communication entre vous"
      />
      <h1 className="text-5xl font-semibold text-slate-900 font-teko scr900:text-left text-center">
        Voulez vous enrichir plus votre présence en ligne?
      </h1>
      <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-4">
        TSHIIL vous garantit une application mobile sur mesure compatible avec vos besoin pour proposer une collection
        de fonctionnalités à vos clients et faciliter la communication entre vous.
      </p>
      <img src={mobile_pic_01} alt="" className="w-full mt-6" />
      <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-6">
        Pourquoi vous devez créer une application mobile?
      </p>
      <div className="flex gap-3 mt-6">
        <div>
          <img src={mobile_pic_02} alt="" className="w-full" />
        </div>
        <div>
          <img src={mobile_pic_03} alt="" className="w-full" />
        </div>
      </div>
      <div className="flex scr600:flex-row flex-col items-center">
        <ul className="scr600:w-1/2 w-full">
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">
              Augmenter vos ventes et accentuer votre business.
            </p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">
              Enrichir votre visibilité et votre popularité en ligne.
            </p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">
              Pouvoir être accessible par les internautes à tous moments.
            </p>
          </li>
        </ul>
        <div className="scr600:w-1/2 w-2/3 scr600:mt-0 mt-6">
          <img src={mobile_pic_04} alt="" className="w-full" />
        </div>
      </div>
      <p className="text-lg font-semibold text-blue-600 scr900:text-left text-center mt-8">
        Notre équipe est capable de:
      </p>
      <ul className="mt-4 flex flex-col gap-3 font-dm_sans">
        <li className={`ring ring-slate-200 py-4 px-6 rounded font-medium text-lg`}>
          <div>Réaliser une application mobile performantes avec des fonctionnalités innovantes.</div>
        </li>
        <li className={`ring ring-slate-200 py-4 px-6 rounded font-medium text-lg`}>
          <div>Fournir une application mobile qui offre une meilleure expérience utilisateur.</div>
        </li>
        <li className={`ring ring-slate-200 py-4 px-6 rounded font-medium text-lg`}>
          <div>Prendre en charge l'aspect esthétique et la conception particulière de l'application.</div>
        </li>
      </ul>
    </div>
  );
}

export default MobileDevServiceContent;
