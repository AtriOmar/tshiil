import React, { useState } from "react";
import { Link } from "react-router-dom";

function ServicesLink({ title, pagePath }) {
  const [active, setActive] = useState(false);
  return (
    <Link to={pagePath}>
      <div
        className=" pr-4 pl-6 py-4 relative overflow-hidden grow bg-white "
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        {/* hover background and circles */}
        <div
          className={`z-0 transition duration-300
      } ease-in absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#4D80F6] to-[#1c51ca]
          ${active ? "translate-x-0" : "translate-x-[calc(-100%_+_4px)]"}`}
        ></div>
        {/* card content */}
        <div className="z-50 relative">
          <h1
            className={`transition duration-500 text-lg font-semibold text-center ${
              active ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default ServicesLink;
