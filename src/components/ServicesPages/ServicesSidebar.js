import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import React from "react";
import ServicesLink from "./ServicesLink";

function ServicesSidebar() {
  return (
    <div className="w-full flex flex-col px-6 py-10 gap-4 bg-slate-100 rounded-lg">
      <h1 className="text-3xl font-normal text-slate-900 font-teko text-center">
        Besoin d'Urgence?
        <br />
        Appelez nous
      </h1>
      <a href="tel:+21624090003" className="flex items-center gap-4 justify-center">
        <div className="bg-blue-100 rounded-full p-3">
          <LocalPhoneIcon />
        </div>
        <div>
          <p className="text-blue-800 font-normal text-sm">Numéro De Téléphone</p>
          <p className="text-blue-900 font-bold text-lg">+216 24 090 003</p>
        </div>
      </a>
      {servicesArr.map((el, index) => (
        <ServicesLink key={index} title={el.title} pagePath={el.pagePath} />
      ))}
    </div>
  );
}

export default ServicesSidebar;

const servicesArr = [
  {
    title: "Création Site Web",
    pagePath: "/services/web",
  },
  {
    title: "Création Application Mobile",
    pagePath: "/services/mobile",
  },
  {
    title: "Marketing Digital",
    pagePath: "/services/marketing",
  },
  {
    title: "Conception Graphique",
    pagePath: "/services/design",
  },
  {
    title: "Etudes De Projets",
    pagePath: "/services/projects",
  },
  {
    title: "Services Administratifs",
    pagePath: "/services/administration",
  },
  {
    title: "Relations Locales Et Internationales",
    pagePath: "/services/relations",
  },
  // {
  //   title: "Prise En Charge De La Main D’œuvre",
  //   pagePath: "/services/manpower",
  // },
  {
    title: "Services Logistique",
    pagePath: "/services/logistics",
  },
];
