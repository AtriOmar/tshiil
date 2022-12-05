import React from "react";
import Head from "./Head";
import OurValuesContent from "./OurValuesPack/OurValuesContent";
import SecondNav from "./SecondNav";

function OurValues() {
  return (
    <div>
      <Head pageTitle="TSHIIL | Nos valeurs" />
      <SecondNav />
      <div className="w-full py-32 flex items-center justify-center bg-gradient-to-r from-[#1C51CB] to-[#4E81F7] uppercase text-white text-6xl font-teko text-center">
        Nos Valeurs
      </div>
      <OurValuesContent />
    </div>
  );
}

export default OurValues;
