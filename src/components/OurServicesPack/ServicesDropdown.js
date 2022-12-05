import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const ArrowDown = ({ arrowColor }) => (
  <svg version="1.1" id="Capa_1" x="0px" y="0px" width="20px" height="12px" viewBox="0 0 960 560" fill={arrowColor}>
    <g id="Rounded_Rectangle_33_copy_4_1_">
      <path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937   c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937   c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z" />
    </g>
  </svg>
);

export default function ServicesDropdown({ arrowColor = "#1e40af" }) {
  const [menuVisible, setMenuVisible] = useState(false);

  //   toggling the services dropdown
  function handleMouseMove(e) {
    // not all browsers support e.path,
    // we created the function 'elementPath'
    // in case the browser doesn't support the other one
    function elementPath(el) {
      let elPath = [];

      while (el) {
        elPath.push(el);

        if (el.tagName === "HTML") {
          elPath.push(document);
          elPath.push(window);

          return path;
        }

        el = el.parentElement;
      }
    }
    const path = e.path || (e.composedPath && e.composedPath()) || elementPath(e.target);
    if (!path.includes(document.querySelector("#servicesDropdown"))) {
      setMenuVisible(false);
      document.removeEventListener("mousemove", handleMouseMove);
    }
  }
  function handleDropdownMouseEnter(e) {
    setMenuVisible(true);
    document.addEventListener("mousemove", handleMouseMove);
  }

  return (
    <div className="w-fit relative z-10" id="servicesDropdown">
      <div className="absolute top-0 left-0 w-full h-20"></div>
      <Menu as="div" className="relative">
        <div className="width-fit">
          <Menu.Button onMouseEnter={handleDropdownMouseEnter}>
            <Link to="/services" className="flex items-center gap-1">
              Nos Services
              <ArrowDown arrowColor={arrowColor} />
            </Link>
          </Menu.Button>
        </div>
        <Transition
          show={menuVisible}
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95 translate-y-[50px]"
          enterTo="transform opacity-100 scale-100 translate-y-0"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="font-cera text-blue-900 font-bold text-base left-[50%] translate-x-[-50%] box-content absolute mt-5 w-56 divide-y divide-gray-300 rounded-sm bg-white shadow-lg ring-2 ring-black ring-opacity-5 focus:outline-none">
            {servicesArr.map((service, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <div
                    className={`${
                      active ? "text-blue-700" : "text-blue-900"
                    } group flex w-full items-center px-4 py-4 transition-all duration-150`}
                  >
                    <Link to={service.pagePath}>{service.title}</Link>
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

const servicesArr = [
  {
    title: "Création Site Web",
    pagePath: "/services/web",
  },
  {
    title: "Création Application Mobile",
    pagePath: "/services/mobile",
  },
  {
    title: "Marketing Digital",
    pagePath: "/services/marketing",
  },
  {
    title: "Conception Graphique",
    pagePath: "/services/design",
  },
  {
    title: "Etudes De Projets",
    pagePath: "/services/projects",
  },
  {
    title: "Services Administratifs",
    pagePath: "/services/administration",
  },
  {
    title: "Relations Locales Et Internationales",
    pagePath: "/services/relations",
  },
  // {
  //   title: "Prise En Charge De La Main D’œuvre",
  //   pagePath: "/services/manpower",
  // },
  {
    title: "Services Logistique",
    pagePath: "/services/logistics",
  },
];
