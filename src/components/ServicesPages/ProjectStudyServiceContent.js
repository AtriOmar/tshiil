import React, { Fragment, useState } from "react";
import projets_pic_01 from "../../images/projets_pic_01.jpg";
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

function ProjectStudyServiceContent() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <Head pageTitle="TSHIIL | Projets" />
      <h1 className="text-5xl font-semibold text-slate-900 font-teko scr900:text-left text-center">
        Voulez vous créer un projet?
      </h1>
      <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-4">
        TSHIIL dispose de l'expertise nécessaire pour étudier et analyser vos projets industriels et agricoles.
      </p>
      <img src={projets_pic_01} alt="" className="w-full mt-6" />
      <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-6">
        Notre société vous accompagne pas pas en déterminant:
      </p>
      <div className="flex scr600:flex-row flex-col items-center">
        <ul className="w-full">
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">
              les frais d'achat des engins et machines.
            </p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">
              Le choix de terrain et local de lancement.
            </p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">
              Le bon temps d'introduire dans le marché.
            </p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">Le financement des travaux.</p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">
              La rentabilité de votre projet.
            </p>
          </li>
        </ul>
      </div>
      <p className="text-lg font-semibold text-blue-600 scr900:text-left text-center mt-8">
        Notre équipe vous aide à savoir comment et quand lancer votre entreprise!
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
              Etude et Conseil
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              TSHIIL vous écoute pour savoir et comprendre vos demandes et vos besoins.
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
              Analyse Comparative
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              TSHIIL vous aide à connaitre la force de vos concurrents pour que vous se positionnez en fonction.
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
              cahier de charge
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              TSHIIL vous écrit un suivi qui reprend tous les taches de votre projet.
            </AccordionBody>
          </Accordion>
        </li>
        <li className={`ring ${open === 4 ? "ring-blue-400" : "ring-slate-200"} transition duration-500 rounded`}>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`py-4 px-6 rounded-t transition duration-500 font-medium text-lg ${
                open === 4 ? "bg-blue-400 text-white" : ""
              }`}
            >
              Accompagnement
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              TSHIIL suivra votre développement et vous transmettra des stratégies qui vous aideront à très bien
              avancer.
            </AccordionBody>
          </Accordion>
        </li>
      </ul>
    </div>
  );
}

export default ProjectStudyServiceContent;
