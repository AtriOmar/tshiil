import React, { useState } from "react";
import { Link } from "react-router-dom";
import pattern1 from "../../images/pattern-1.png";

function WhyUs() {
  const [hoveringDeatils, setHoveringDetails] = useState(false);

  return (
    <div className="">
      <div className="flex scr1000:flex-row flex-col bg-white max-w-[1200px] m-auto">
        <div className="scr1000:w-5/12 w-full scr1000:px-5 px-10 py-20 relative z-10 scr600:text-left text-center">
          <h1 className="text-5xl font-bold text-slate-900 font-teko uppercase relative">POURQUOI NOUS CHOISIR?</h1>
          <h2 className="text-3xl font-medium text-slate-900 font-dm_sans mt-4">
            Commencer la création de votre affaires avec notre équipes
          </h2>
          <ul>
            <li>
              <h3 className="text-xl font-medium text-slate-900 font-dm_sans mt-6">01. Assistance à temps plein</h3>
              <p className="text-base font-normal text-slate-600 mt-3">
                Notre équipe sont à votre disposition à tous moments pour vos fournir des bon services.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-medium text-slate-900 font-dm_sans mt-3">
                02. Obtenez des services professionnels
              </h3>
              <p className="text-base font-normal text-slate-600 mt-3">
                TSHIIL vous garanti des services performant et adaptables à vos besoins.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-medium text-slate-900 font-dm_sans mt-3">
                03. Plus rapide, De qualité et De confiance
              </h3>
              <p className="text-base font-normal text-slate-600 mt-3">
                Nous insistons bien sur le temps de réponse à nos clients ainsi que le bon qualité de nos services.
              </p>
            </li>
          </ul>
          <Link to="/valeurs">
            <div
              className="w-fit mt-6 scr600:mx-0 mx-auto text-white font-cera text-base font-black uppercase px-10 py-4 rounded-[50px] bg-blue-900 cursor-pointer relative overflow-hidden flex items-center justify-center"
              onMouseEnter={() => setHoveringDetails(true)}
              onMouseLeave={() => setHoveringDetails(false)}
            >
              <div
                className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-blue-600 h-full ${
                  hoveringDeatils ? "w-full" : "w-1/6 opacity-0"
                }`}
                style={{ transition: ".6s" }}
              ></div>
              <p className="z-10">PLUS DE DÉTAILS</p>
            </div>
          </Link>
        </div>
        {/* circles and animated pictures, the z-index is to set the circles as background */}
        <div className="scr1000:w-7/12 w-full h-[700px] scr1000:overflow-visible overflow-hidden scr1000:translate-y-0 translate-y-[-0%] scr1000:mt-0 mt-[-600px] relative z-0">
          <div className="bg-blue-100 w-[600px] h-[600px] rounded-[50%] absolute top-[15%] right-[15%] translate-x-[0%] translate-y-[0%]">
            <img
              src={pattern1}
              alt=""
              className="scr600:block hidden absolute scr1000:top-24 scr1000:bottom-auto bottom-10 left-0 animate-[bounce_4s_infinite]"
            />
            <img
              src={pattern1}
              alt=""
              className="scr600:block hidden absolute scr1000:top-[-40px] scr1000:bottom-auto bottom-32 right-0 animate-[zoomInOut_6s_linear_infinite]"
            />
          </div>
          <div className=" w-[600px] h-[600px] border-2 border-solid border-[#edf2ff] rounded-[50%] absolute top-[15%] right-[15%] translate-x-[5%] translate-y-[-5%]"></div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
