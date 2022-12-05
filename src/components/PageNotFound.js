import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import ScrollUpButton from "./ScrollUpButton";
import SecondNav from "./SecondNav";

function PageNotFound() {
  return (
    <div>
      <MobileNavbar />
      <ScrollUpButton />
      <SecondNav />
      <h1 className="font-teko text-5xl font-bold text-center text-slate-900 py-20 px-5">
        Oops...
        <br />
        Nous ne trouvons pas la page que vous recherchez.
        <br /> Pour plus d'aide, vous pouvez nous contacter{" "}
        <Link to="/contact" className="text-blue-600 underline">
          d'ici
        </Link>
      </h1>
      <Footer />
    </div>
  );
}

export default PageNotFound;
