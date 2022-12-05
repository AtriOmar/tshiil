import React from "react";
import Tilt from "react-parallax-tilt";

function ValueCard({ imageSrc, title, text }) {
  return (
    <div className="w-full flex scr900:flex-row flex-col">
      <div className="scr1000:w-1/2 w-full px-4 scr900:order-1 order-2">
        <Tilt>
          <img src={imageSrc} alt="" className="w-full" />
        </Tilt>
      </div>
      <div className="scr1000:w-1/2 w-full px-8 py-4 scr900:order-2 order-1">
        <h3 className="text-blue-600 font-dm_sans uppercase text-lg font-bold scr900:text-left text-center ">
          {title}
        </h3>
        <p className="text-base font-normal text-slate-600 mt-4 scr900:text-left text-center">{text}</p>
      </div>
    </div>
  );
}

export default ValueCard;
