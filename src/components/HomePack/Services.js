import React from "react";
import ServicesCard from "./ServicesCard";
import { ReactComponent as WebDevIcon } from "../../images/web_dev_icon.svg";
import { ReactComponent as AdministrationIcon } from "../../images/administration_icon.svg";
import { ReactComponent as DesignIcon } from "../../images/design_icon.svg";
import { ReactComponent as MobileIcon } from "../../images/mobile_icon_2.svg";
import { ReactComponent as MarketingIcon } from "../../images/marketing_icon.svg";
import { ReactComponent as ManpowerIcon } from "../../images/manpower_icon.svg";
import { ReactComponent as RelationsIcon } from "../../images/relations_icon.svg";
import { ReactComponent as ProjectsStudyIcon } from "../../images/projects_study_icon.svg";
import { ReactComponent as LogisticsIcon } from "../../images/logistics_icon.svg";

function Services() {
  return (
    <div className="relative bg-blue-100 py-32 px-8 overflow-hidden">
      {/* background circles */}
      <div className="w-[588px] h-[588px] absolute left-[-120px] top-[-120px] bg-gradient-to-b from-blue-100 to-blue-200 rounded-full z-0"></div>
      <div className="w-[800px] h-[800px] absolute right-[80px] bottom-[-100px] bg-gradient-to-b from-blue-200 to-blue-100 rounded-full z-0"></div>
      {/* main content */}
      <div className="flex flex-col items-center max-w-[1200px] m-auto relative">
        <h1 className="text-5xl font-semibold text-slate-900 font-teko text-center uppercase">QUI SOMMES NOUS?</h1>
        <p className="text-base font-normal text-slate-600 text-center mt-4">
          TSHIIL est une société tunisienne propose des services novateurs qui visent à faciliter la vie de tout un
          chacun, particuliers comme professionnels. Elle s’adressant aussi bien aux Tunisiens résidents qu’aux
          étrangers. Cette société intervient dans divers domaines.
        </p>
        <div className="flex flex-wrap gap-8 my-10 justify-center">
          {servicesArr.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              text={service.text}
              bgColor={service.bgColor}
              pagePath={service.pagePath}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

const servicesArr = [
  {
    title: "Création Site Web",
    text: "Développement de sites web attractifs conformes aux exigences de nos clients.",
    bgColor: "from-[#285ACE] to-[#4a7ef4]",
    pagePath: "/services/web",
    icon: WebDevIcon,
  },
  {
    title: "Création Application Mobile",
    text: "Laissez nous vous aider afin de bâtir votre propre application mobile.",
    bgColor: "from-[#FF5B5B] to-[#fd7878]",
    pagePath: "/services/mobile",
    icon: MobileIcon,
  },
  {
    title: "Marketing Digital",
    text: "Nous vous proposons des stratégie de marketing intéressantes.",
    bgColor: "from-[#51E5CB] to-[#5cf1d7]",
    pagePath: "/services/marketing",
    icon: MarketingIcon,
  },
  {
    title: "Conception Graphique",
    text: "Vous avez un projet et vous voulez créer leur identité visuelle! Nous somme là pour vous aider avec plaisir.",
    bgColor: "from-[#285ACE] to-[#4a7ef4]",
    pagePath: "/services/design",
    icon: DesignIcon,
  },
  {
    title: "Etudes De Projets",
    text: "Nous disposons de l’expertise nécessaire pour analyser vos projets.",
    bgColor: "from-[#FFCF8F] to-[#f7d09d]",
    pagePath: "/services/projects",
    icon: ProjectsStudyIcon,
  },
  {
    title: "Services Administratifs",
    text: "TSHIIL peut prendre en charge divers services administratifs afin de vous éviter de perdre du temps dans les éventuels aller-retours et la mise en place de la paperasse nécessaire, entre autres.",
    bgColor: "from-[#285ACE] to-[#4a7ef4]",
    pagePath: "/services/administration",
    icon: AdministrationIcon,
  },
  {
    title: "Relations Locales Et Internationales",
    text: "Nous pouvons s’occuper de connecter les relations locales et internationales afin de prospérer votre activité.",
    bgColor: "from-[#AC74EE] to-[#9c74cc]",
    pagePath: "/services/relations",
    icon: RelationsIcon,
  },
  // {
  //   title: "Prise En Charge De La Main D’œuvre",
  //   text: "Nous pouvons fournir de la main-d’œuvre dans tous les domaines.",
  //   bgColor: "from-[#7CC0FF] to-[#46a2f7]",
  //   pagePath: "/services/manpower",
  //   icon: ManpowerIcon,
  // },
  {
    title: "Services Logistique",
    text: "TSHIIL met à votre disposition une équipe d’experts dans la logistique.",
    bgColor: "from-[#285ACE] to-[#4a7ef4]",
    pagePath: "/services/logistics",
    icon: LogisticsIcon,
  },
];
