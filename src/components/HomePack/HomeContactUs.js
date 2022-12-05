import React, { useState } from "react";
import { Link } from "react-router-dom";
import contact1 from "../../images/contact-1-1.jpg";

function HomeContactUs() {
  const [hoveringContactUs, setHoveringContactUs] = useState(false);

  return (
    <div className="w-full flex flex-col items-center py-20 px-4">
      <div className="px-8 py-3 bg-yellow-100 text-yellow-500 font-bold rounded-full text-center">
        Vous avez une question!
      </div>
      <h1 className="text-5xl font-semibold text-slate-900 font-teko uppercase mt-8 text-center">
        N'HÉSITEZ PAS À NOUS CONTACTER POUR PLUS D'INFORMATIONS
      </h1>
      <div className="flex scr1000:flex-row flex-col items-center justify-center">
        <img src={contact1} alt="" className="scr1000:w-[600px] w-full scr1000:order-1 order-2" />
        <Link to="/contact " className="scr1000:order-2 order-1">
          <div
            className=" w-fit h-fit mt-6 text-white font-cera text-base font-black uppercase px-10 py-4  rounded-[50px] bg-blue-900 cursor-pointer relative overflow-hidden flex items-center justify-center"
            onMouseEnter={() => setHoveringContactUs(true)}
            onMouseLeave={() => setHoveringContactUs(false)}
          >
            <div
              className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-blue-600 h-full ${
                hoveringContactUs ? "w-full" : "w-1/3 opacity-0"
              }`}
              style={{ transition: ".5s" }}
            ></div>
            <p className="z-10">CONTACTEZ NOUS</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomeContactUs;
