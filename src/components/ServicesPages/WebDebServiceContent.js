import React, { Fragment, useState } from "react";
import web_pic_01 from "../../images/web_pic_01.jpg";
import web_pic_02 from "../../images/web_pic_02.jpg";
import web_pic_03 from "../../images/web_pic_03.jpg";
import web_pic_04 from "../../images/web_pic_04.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import Head from "../Head";

function Icon({ id, open }) {
  return (
    <svg
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function WebDebServiceContent() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <Head pageTitle="TSHIIL | Web" pageDescription="TSHIIL fournit des sites web attractif et de haute qualité" />
      <h1 className="text-5xl font-semibold text-slate-900 font-teko scr900:text-left text-center">
        TSHIIL fournit des sites web attractif et de haute qualité.
      </h1>
      <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-4">
        Chez TSHIIL Services vous pouvez acquérir des nouveaux clients et augmenter votre chiffre d'affaires grâce à un
        site web propre de votre entreprise.
      </p>
      <img src={web_pic_01} alt="" className="w-full mt-6" />
      <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-6">
        Pourquoi faire la création d'un site web?
      </p>
      <div className="flex gap-3 mt-6">
        <div>
          <img src={web_pic_02} alt="" className="w-full" />
        </div>
        <div>
          <img src={web_pic_03} alt="" className="w-full" />
        </div>
      </div>
      <div className="flex scr600:flex-row flex-col items-center">
        <ul className="scr600:w-1/2 w-full">
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">
              Attirer de nouveaux clients de différents régions.
            </p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">
              Se placer dans une nouvelle dimension commercial.
            </p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">
              Devenir de plus en plus populaire dans le domaine économique.
            </p>
          </li>
        </ul>
        <div className="scr600:w-1/2 w-2/3 scr600:mt-0 mt-6">
          <img src={web_pic_04} alt="" className="w-full" />
        </div>
      </div>
      <p className="text-lg font-semibold text-blue-600 scr900:text-left text-center mt-8">
        Notre équipe peut vous approvisionner par plusieurs type de site web:
      </p>
      {/* accordion */}
      <ul className="mt-4 flex flex-col gap-3 font-dm_sans">
        <li className={`ring ${open === 1 ? "ring-blue-400" : "ring-slate-200"} transition duration-500 rounded`}>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`py-4 px-6 rounded-t transition duration-500 font-medium text-lg ${
                open === 1 ? "bg-blue-400 text-white" : ""
              }`}
            >
              Site Web Vitrine
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              Nous réalisons des sites vitrines simple et attractifs conforme aux exigences de nos clients contenant une
              présentation de l'activité de l'entreprise, quelques photos descriptifs ainsi qu'une formulaire de
              contact.
            </AccordionBody>
          </Accordion>
        </li>
        <li className={`ring ${open === 2 ? "ring-blue-400" : "ring-slate-200"} transition duration-500 rounded`}>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`py-4 px-6 rounded-t transition duration-500 font-medium text-lg ${
                open === 2 ? "bg-blue-400 text-white" : ""
              }`}
            >
              Site E-Commerce
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              Notre équipe vous réalise des sites e-commerce afin d'exposer vos produits ou vos services en ligne pour
              atteindre une nouvelle cible de consommateurs, augmenter les transactions de vos points de vente et
              réussir à s'imposer face vos concurrents.
            </AccordionBody>
          </Accordion>
        </li>
        <li className={`ring ${open === 3 ? "ring-blue-400" : "ring-slate-200"} transition duration-500 rounded`}>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`py-4 px-6 rounded-t transition duration-500 font-medium text-lg ${
                open === 3 ? "bg-blue-400 text-white" : ""
              }`}
            >
              Site E-Catalogue
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              Souhaitez vous se donner une visibilité sur le web? TSHIIL vous recommande de réaliser un site E-Catalogue
              afin de présenter vos produits, favoriser la vente de vos produits et tester une activité avant passer au
              e-commerce. C'est à dire le même principe d'un site E-commerce mais sans module de paiement.
            </AccordionBody>
          </Accordion>
        </li>
      </ul>
    </div>
  );
}

export default WebDebServiceContent;
