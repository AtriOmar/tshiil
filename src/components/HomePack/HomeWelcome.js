import React from "react";
import HomeNav from "./HomeNav";
import HomeSwiper from "./HomeSwiper";
import { ReactComponent as HomeWelcomeBackground } from "../../images/home_welcome_background.svg";

function HomeWelcome() {
  return (
    <div
      className="relative"
      // style={{
      //   backgroundImage:
      //     "linear-gradient(0deg, rgba(20,124,224,1) 0%, rgba(20,124,236,1) 70%, rgba(243,248,255,1) 100%)",
      // }}
    >
      <HomeWelcomeBackground preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-full z-[-1]" />
      <HomeNav />
      <div className="relative">
        <HomeSwiper />
      </div>
    </div>
  );
}

export default HomeWelcome;
