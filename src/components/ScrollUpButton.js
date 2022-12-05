import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "@headlessui/react";
import React, { Fragment, useContext, useState } from "react";
import { UIContext } from "../contexts/UIProvider";

function ScrollUpButton() {
  const { windowScroll } = useContext(UIContext);
  const [active, setActive] = useState(false);

  return (
    <Transition
      show={windowScroll > 200}
      as={Fragment}
      enter="transition linear duration-1000"
      enterFrom="scale-75 opacity-0"
      enterTo="scale-100 opacity-100"
      leave="transition linear duration-1000"
      leaveFrom="scale-100 opacity-100"
      leaveTo="scale-75 opacity-0"
    >
      <i
        className={`shadow-[0_10px_30px_0_rgb(28,9,80,19%)] cursor-pointer z-10 w-12 h-12 rounded-[50%] flex items-center justify-center fixed bottom-4 right-4 transition duration-500 ${
          active ? "bg-[#3569e1]" : "bg-white"
        }`}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <FontAwesomeIcon icon={faArrowUp} size="lg" color={`${active ? "white" : "#3569e1"}`} />
      </i>
    </Transition>
  );
}

export default ScrollUpButton;
