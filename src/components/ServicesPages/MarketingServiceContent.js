import React, { Fragment, useState } from "react";
import marketing_pic_01 from "../../images/marketing_pic_01.jpg";
import marketing_pic_02 from "../../images/marketing_pic_02.jpg";
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

function MarketingServiceContent() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <Head
        pageTitle="TSHIIL | Marketing"
        pageDescription="Nos expert de marketing digital vous garantit une stratégie idéal et bien analyser afin d'augmenter la notoriété et l'engagement de votre société sur les réseaux sociaux"
      />
      <h1 className="text-5xl font-semibold text-slate-900 font-teko scr900:text-left text-center">
        Souhaitez vous booster votre entreprise?
      </h1>
      <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-4">
        Nos expert de marketing digital vous garantit une stratégie idéal et bien analyser afin d'augmenter la notoriété
        et l'engagement de votre société sur les réseaux sociaux. Ces derniers ont la possibilité de présenter votre
        business de façon plus attractive et d'attirer de nouveaux clients.
      </p>
      <img src={marketing_pic_01} alt="" className="w-full mt-6" />
      <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-6">
        Notre stratégie de marketing digital est conçue pour:
      </p>
      <div className="flex scr600:flex-row flex-col items-center">
        <ul className="scr600:w-1/2 w-full">
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">Attirer l'intérêt.</p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">Convertir en prospect.</p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">Entretenir la relation.</p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">Transformer en clients.</p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">satisfaire les clients.</p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 scr900:text-left text-left">Fidéliser les clients.</p>
          </li>
        </ul>
        <div className="scr600:w-1/2 w-2/3 scr600:mt-0 mt-6">
          <img src={marketing_pic_02} alt="" className="w-full" />
        </div>
      </div>
      <p className="text-lg font-semibold text-blue-600 scr900:text-left text-center mt-8">
        les éléments de base de notre stratégie:
      </p>
      {/* accordion */}
      <ul className="mt-4 flex flex-col gap-3 font-dm_sans">
        <li className={`ring ${open === 1 ? "ring-blue-400" : "ring-slate-200"} transition duration-500 rounded`}>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`py-4 px-6 rounded-t transition duration-500 font-medium text-lg text-left ${
                open === 1 ? "bg-blue-400 text-white" : ""
              }`}
            >
              Stratégie des médias sociaux
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              Notre équipe de marketing vous présentera tous les conseils nécessaires pour accroitre votre présence sur
              les médias sociaux.
            </AccordionBody>
          </Accordion>
        </li>
        <li className={`ring ${open === 2 ? "ring-blue-400" : "ring-slate-200"} transition duration-500 rounded`}>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`py-4 px-6 rounded-t transition duration-500 font-medium text-lg text-left ${
                open === 2 ? "bg-blue-400 text-white" : ""
              }`}
            >
              Le design graphique
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              Notre designer est apte pour réaliser des affiches claires et élégantes ou des vidéos attractives qui
              apportent de la valeur à votre cible.
            </AccordionBody>
          </Accordion>
        </li>
        <li className={`ring ${open === 3 ? "ring-blue-400" : "ring-slate-200"} transition duration-500 rounded`}>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`py-4 px-6 rounded-t transition duration-500 font-medium text-lg text-left ${
                open === 3 ? "bg-blue-400 text-white" : ""
              }`}
            >
              Gestionnaire de communauté
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              Sert à établir un lien fort avec vos clients afin de les fidéliser et convertir en ambassadeurs.
            </AccordionBody>
          </Accordion>
        </li>
        <li className={`ring ${open === 4 ? "ring-blue-400" : "ring-slate-200"} transition duration-500 rounded`}>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`py-4 px-6 rounded-t transition duration-500 font-medium text-lg text-left ${
                open === 4 ? "bg-blue-400 text-white" : ""
              }`}
            >
              Sponsorisation Facebook
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              Nous assurons la sponsorisation de vos publications pour vous aider à atteindre vos objectifs.
            </AccordionBody>
          </Accordion>
        </li>
      </ul>
    </div>
  );
}

export default MarketingServiceContent;
