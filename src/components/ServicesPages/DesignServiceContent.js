import React, { Fragment, useState } from "react";
import design_pic_01 from "../../images/design_pic_01.jpg";
import design_pic_02 from "../../images/design_pic_02.jpg";
import design_pic_03 from "../../images/design_pic_03.jpg";
import design_pic_04 from "../../images/design_pic_04.jpg";
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

function DesignServiceContent() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <Head
        pageTitle="TSHIIL | Conception graphique"
        pageDescription="TSHIIL vous conçoit une identité visuelle personnalisée à votre entreprise"
      />
      <h1 className="text-5xl font-semibold text-slate-900 font-teko scr900:text-left text-center">
        TSHIIL vous conçoit une identité visuelle personnalisée à votre entreprise.
      </h1>
      <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-4">
        La représentation graphique de votre identité visuelle vous permet de vous démarquer et de communiquer dès lors
        qu'un prospect pose un œil sur vos documents.
      </p>
      <img src={design_pic_01} alt="" className="w-full mt-6" />
      <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-6">
        Votre identité doit être:
      </p>
      <div className="flex gap-3 mt-6">
        <div>
          <img src={design_pic_04} alt="" className="w-full" />
        </div>
        <div>
          <img src={design_pic_03} alt="" className="w-full" />
        </div>
      </div>
      <div className="flex scr600:flex-row flex-col items-center">
        <ul className="scr600:w-1/2 w-full">
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 text-left">À travers des signes significatifs.</p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 text-left">Des couleurs lisibles.</p>
          </li>
          <li className="flex items-center mt-6 gap-3">
            <FontAwesomeIcon icon={faCheck} size="2x" color="blue" />
            <p className="text-lg font-normal text-slate-600 text-left">Des formes claires.</p>
          </li>
        </ul>
        <div className="scr600:w-1/2 w-2/3 scr600:mt-0 mt-6">
          <img src={design_pic_02} alt="" className="w-full" />
        </div>
      </div>
      <p className="text-lg font-semibold text-blue-600 scr900:text-left text-center mt-8">
        L'identité visuelle globale de votre entreprise passe par:
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
              Etude et création de logo
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              Le logo envoie les premiers messages sur l'entreprise, sur ses principes et assurera sa valeur dans le
              marché. Ce pour cela la conception de logo doit prendre en considérations plusieurs facteurs liés à
              l'activité de l'entreprise.
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
              Carte visite
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              Une carte visite bien créer vous offre des opportunités pour abouter des nouveaux liens.
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
              Brochure
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              Une brochure doit refléter la culture de votre entreprise pour pouvoir attirer des clients et affirmer vos
              moyens de communications.
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
              Enseigne
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              L'objectif d'une enseigne est de permettre aux clients d'identifiés géographiquement un local
              d'exploitation. Une enseigne bien faite vous permettez d'attirer l'attention de nouveaux clients.
            </AccordionBody>
          </Accordion>
        </li>
      </ul>
    </div>
  );
}

export default DesignServiceContent;
