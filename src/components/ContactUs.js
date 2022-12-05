import React from "react";
import ContactInfo from "./ContactUsPack/ContactInfo";
import ContactUsForm from "./ContactUsPack/ContactUsForm";
import Head from "./Head";
import SecondNav from "./SecondNav";

function ContactUs() {
  return (
    <div>
      <Head pageTitle="TSHIIL | Contactez nous" />
      <SecondNav />
      <div className="w-full py-32 flex items-center justify-center bg-gradient-to-r from-[#1C51CB] to-[#4E81F7] uppercase text-white text-6xl font-teko text-center">
        CONTACT
      </div>
      <ContactUsForm />
      <ContactInfo />
    </div>
  );
}

export default ContactUs;
