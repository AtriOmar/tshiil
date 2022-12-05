import React from "react";
import Head from "./Head";
import OurServicesContactUs from "./OurServicesPack/OurServicesContactUs";
import ServicesGroup from "./OurServicesPack/ServicesGroup";
import SecondNav from "./SecondNav";

function OurServices() {
  return (
    <div>
      <Head
        pageTitle="TSHIIL | Nos services"
        pageDescription="Nous offrons une variété de services tels que la création des sites web, la création des applications mobiles, l'héberegment web, le marketing digital, en plus de tant d'autres. "
      />
      <SecondNav />
      <div className="w-full py-32 flex items-center justify-center bg-gradient-to-r from-[#1C51CB] to-[#4E81F7] uppercase text-white text-6xl font-teko text-center">
        Nos Services
      </div>
      <ServicesGroup />
      <OurServicesContactUs />
    </div>
  );
}

export default OurServices;
