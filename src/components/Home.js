import Head from "./Head";
import HomeContactUs from "./HomePack/HomeContactUs";
import HomeWelcome from "./HomePack/HomeWelcome";
import Services from "./HomePack/Services";
import Team from "./HomePack/Team";
import WhyUs from "./HomePack/WhyUs";

function Home() {
  return (
    <div className="Home" id="Home">
      <Head pageTitle="TSHIIL | Accueil" />
      <HomeWelcome />
      <Services />
      {/* <Team /> */}
      {/* Tshiil, toujours à votre service, with a fixed background */}
      <WhyUs />
      <HomeContactUs />
    </div>
  );
}

export default Home;
