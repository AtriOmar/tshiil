import React, { useEffect, useState } from "react";
import innovationImg from "../../images/innovation_img.jpg";
import partageImg from "../../images/partage_img.jpg";
import excellenceImg from "../../images/excellence_img.jpg";
import confianceImg from "../../images/confiance_img.jpg";
import respectImg from "../../images/respect_img.jpg";
import bienveillanceImg from "../../images/bienveillance_img.jpg";
import ValueCard from "./ValueCard";

function OurValuesContent() {
  const [values, setValues] = useState([]);

  // fetching the values from the database
  useEffect(() => {
    setValues(valuesArr);
  }, []);

  return (
    <div className="w-full py-20 px-6">
      <div className="max-w-[1200px] m-auto">
        <h1 className="text-5xl font-semibold text-slate-900 font-teko text-center uppercase">
          NOS VALEURS SONT NOS PRINCIPES QUI REFLÈTENT NOTRE VISION!
        </h1>
        <div className="flex flex-col gap-20 mt-20">
          {values.map((value, index) => (
            <ValueCard key={index} title={value.title} text={value.text} imageSrc={value.imageSrc} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurValuesContent;

const valuesArr = [
  {
    title: "LA CONFIANCE",
    text: "Faites-nous confiance pour la réussite de votre projet, pour renforcer votre entreprise, et pour atteindre la prospérité au travail.",
    imageSrc: confianceImg,
  },
  {
    title: "L'EXCELLENCE",
    text: "Nous visons l’excellence en toutes circonstances, pour satisfaire au mieux ses clients.",
    imageSrc: excellenceImg,
  },
  {
    title: "LE RESPECT",
    text: "Nous respectons nos collègues mais également nos clients..",
    imageSrc: respectImg,
  },
  {
    title: "LE PARTAGE",
    text: "Nous partageons nos réussites comme nos échecs, collaboration entre nous.",
    imageSrc: partageImg,
  },
  {
    title: "LA BIENVEILLANCE",
    text: "On se protège, on protège les autres, on avance et on fait avancer les autres pour vous donner envie d'avancer.",
    imageSrc: bienveillanceImg,
  },
  {
    title: "L'INNOVATION",
    text: "Nous poussons toujours plus loin, l’innovation des idées, des nouveautés, et des nouveaux procédés.",
    imageSrc: innovationImg,
  },
];
