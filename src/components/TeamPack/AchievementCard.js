import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";

function AchievementCard({ title, number, description, elementIntoView, showingDelay = 0 }) {
  return (
    <div
      className={`relative p-6 transition duration-[2s] ${elementIntoView ? "" : "opacity-0 translate-x-[-150px]"}`}
      style={{ transitionDelay: `${showingDelay}ms` }}
    >
      <div className="w-24 h-24 bg-gradient-to-t from-[#F6F8FE] to-[#E8EFFE] rounded-[50%] absolute top-0 left-0 z-[-1]"></div>
      <div className="text-4xl font-teko font-bold text-slate-900">
        {elementIntoView ? <CountUp start={0} end={number} duration={3} /> : "0"}+
      </div>
      <p className="text-blue-500 font-dm_sans capitalize text-base font-normal text-left ">{title}</p>
      <p className="text-base font-normal text-slate-600 text-left mt-4">{description}</p>
    </div>
  );
}

export default AchievementCard;
