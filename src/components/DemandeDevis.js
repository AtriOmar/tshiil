import React from "react";
import ContactInfo from "./ContactUsPack/ContactInfo";
import DemanderDevisForm from "./DemanderDevisPack/DemanderDevisForm";
import Head from "./Head";
import SecondNav from "./SecondNav";

function DemandeDevis() {
  return (
    <div>
      <Head pageTitle="TSHIIL | Demander devis" />
      <SecondNav />
      <div className="w-full py-32 flex items-center justify-center bg-gradient-to-r from-[#1C51CB] to-[#4E81F7] uppercase text-white text-6xl font-teko text-center">
        Demander un devis
      </div>
      <DemanderDevisForm />
      <ContactInfo />
    </div>
  );
}

export default DemandeDevis;
