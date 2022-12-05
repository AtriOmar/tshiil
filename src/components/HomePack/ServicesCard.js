import React, { useState } from "react";
import { Link } from "react-router-dom";

function ServicesCard({ title = "", text = "", bgColor = "", pagePath = "", icon: Icon }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="shadow-[0_10px_30px_0_rgb(28,9,80,9%)] p-8 relative overflow-hidden basis-[325px] grow rounded-lg bg-white "
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Link to={pagePath}>
        {/* hover background and circles */}
        <div
          className={`z-0 transition duration-300
        } ease-in absolute top-0 left-0 w-full h-full bg-gradient-to-r ${bgColor}
          ${active ? "translate-x-0" : "translate-x-[-101%]"}`}
        ></div>
        <div
          className={`z-10 transition duration-500 ${
            active ? "delay-[100ms]" : ""
          } absolute top-0 left-0 w-[384px] h-[348px] rounded-[50%] bg-white opacity-[.08] ${
            active ? "translate-x-[-60%] translate-y-[-60%]" : "translate-x-[-100%] translate-y-[-100%]"
          }`}
        ></div>
        <div
          className={`z-20 transition duration-500 ${
            active ? "delay-[400ms]" : ""
          } absolute top-0 left-0 w-[384px] h-[348px] rounded-[50%] bg-white opacity-[.08] ${
            active ? "translate-x-[-45%] translate-y-[-45%]" : "translate-x-[-100%] translate-y-[-100%]"
          }`}
        ></div>
        <div
          className={`z-30 transition duration-500 ${
            active ? "delay-[700ms]" : ""
          } absolute top-0 left-0 w-[384px] h-[348px] rounded-[50%] bg-white opacity-[.08] ${
            active ? "translate-x-[-30%] translate-y-[-30%]" : "translate-x-[-100%] translate-y-[-100%]"
          }`}
        ></div>
        {/* card content */}
        <div className="z-50 relative">
          <div className="h-40 flex items-center justify-center">
            {Icon && (
              <Icon width="150" height="150" className={`transition duration-300 ${active ? "scale-110" : ""}`} />
            )}
          </div>
          <h1
            className={`transition duration-500 text-2xl font-bold mb-6 mt-6 text-center ${
              active ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h1>
          <p
            className={`transition duration-500 text-lg font-normal text-center ${
              active ? "text-white" : "text-slate-600"
            }`}
          >
            {text}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ServicesCard;
