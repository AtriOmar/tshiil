import React, { Fragment, useState } from "react";
import administration_pic_01 from "../../images/administration_pic_01.jpg";
import administration_pic_02 from "../../images/administration_pic_02.jpg";
import administration_pic_03 from "../../images/administration_pic_03.jpg";
import administration_pic_04 from "../../images/administration_pic_04.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Head from "../Head";

function AdministrativeServiceContent() {
  return (
    <div>
      <Head
        pageTitle="TSHIIL | Administration"
        pageDescription="TSHIIL dispose de l'expertise nécessaire pour étudier et analyser vos projets industriels et agricoles"
      />
      <h1 className="text-5xl font-semibold text-slate-900 font-teko scr900:text-left text-center">
        Peu importe vos besoins administratifs!
      </h1>
      <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-4">
        TSHIIL peut prendre en charge divers services administratifs afin de vous éviter de perdre du temps dans les
        éventuels aller-retours et la mise en place de la paperasse nécessaire, entre autres.
      </p>
      <img src={administration_pic_01} alt="" className="w-full mt-6" />
      <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-6">
        TSHIIL est la solution pour tous vos dossiers administratifs indépendante et dotée d'une éthique forte. Nous
        garantissons:
      </p>
      <div className="flex gap-3 mt-6">
        <div>
          <img src={administration_pic_04} alt="" className="w-full" />
        </div>
        <div>
          <img src={administration_pic_03} alt="" className="w-full" />
        </div>
      </div>
      <div className="flex scr600:flex-row flex-col items-center">
        <ul className="scr600:w-1/2 w-full">
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">Le respect.</p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">La sécurité.</p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">La confidentialité.</p>
          </li>
        </ul>
        <div className="scr600:w-1/2 w-2/3 scr600:mt-0 mt-6">
          <img src={administration_pic_02} alt="" className="w-full" />
        </div>
      </div>
      <p className="text-lg font-semibold text-blue-600 scr900:text-left text-center mt-8">
        Nous facilitons les relations avec les administrations d'Etat et nous vous accompagnions dans l'accomplissement
        de vos démarches.
        <br />
        Divers services administratifs chez TSHIIL:
      </p>
      <ul className="mt-4 flex flex-col gap-3 font-dm_sans">
        <li className={`ring ring-slate-200 py-4 px-6 rounded font-medium text-lg`}>
          <div>Préparation de dossier pour créer une entreprise</div>
        </li>
        <li className={`ring ring-slate-200 py-4 px-6 rounded font-medium text-lg`}>
          <div>Préparation de dossier pour acheter une voiture</div>
        </li>
        <li className={`ring ring-slate-200 py-4 px-6 rounded font-medium text-lg`}>
          <div>Préparation de dossier de Visa</div>
        </li>
        <li className={`ring ring-slate-200 py-4 px-6 rounded font-medium text-lg`}>
          <div>Préparation de dossier de crédit bancaire</div>
        </li>
      </ul>
    </div>
  );
}

export default AdministrativeServiceContent;
