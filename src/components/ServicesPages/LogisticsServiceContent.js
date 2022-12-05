import React, { useState } from "react";
import logistics_pic_01 from "../../images/logistics_pic_01.jpg";
import logistics_pic_02 from "../../images/logistics_pic_02.jpg";
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

function LogisticsServiceContent() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <Head pageTitle="TSHIIL | Logistiques" />
      <h1 className="text-5xl font-semibold text-slate-900 font-teko scr900:text-left text-center">
        Voulez vous transporter vos produits et vos articles?
      </h1>
      <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-4">
        Les experts de TSHIIL assimilent vos problèmes et précipitent vos besoins logistiques afin de vous accomplir les
        solutions le plus adaptées qui augmenteront la valeur de votre entreprise.
      </p>
      <img src={logistics_pic_01} alt="" className="w-full mt-6" />
      <p className="text-base font-normal text-slate-600 scr900:text-left text-center mt-6">
        Quel que soit votre domaine d'activité, nous vous proposons des solutions de stockage et de distribution bien
        étudiées pour vous permettre d'accrocher vos engagements envers vos clients.
      </p>
      <div className="w-full">
        <div className="w-2/3 m-auto">
          <img src={logistics_pic_02} alt="" className="w-full" />
        </div>
      </div>
      <p className="text-lg font-semibold text-blue-600 scr900:text-left text-center mt-8">
        TSHIIL vous propose une lare gamme de service:
      </p>
      {/* accordion */}
      <ul className="mt-4 flex flex-col gap-3 font-dm_sans">
        <li className={`ring ${open === 2 ? "ring-blue-400" : "ring-slate-200"} transition duration-500 rounded`}>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`py-4 px-6 rounded-t transition duration-500 font-medium text-lg text-left ${
                open === 2 ? "bg-blue-400 text-white" : ""
              }`}
            >
              Transport Routier National et International
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              Nous disposons des véhicules de différents type afin d'assurer tous vos transports dans le brefs délais .
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
              Transport Maritime
            </AccordionHeader>
            <AccordionBody className={`px-6 text-base font-normal text-slate-600`}>
              Nous vous proposons des solutions de transports maritime pour vous assurer le meilleur rapport entre
              délais et prix.
            </AccordionBody>
          </Accordion>
        </li>
        <li className={`ring ring-slate-200 py-4 px-6 rounded font-medium text-lg`}>
          <div>Transport Aérien</div>
        </li>
      </ul>
    </div>
  );
}

export default LogisticsServiceContent;
