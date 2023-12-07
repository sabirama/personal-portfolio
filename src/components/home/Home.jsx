import HeroSection from "./subcomponents/hero-section/HeroSection";
import Projects from "./subcomponents/projects/Projects";
import Services from "./subcomponents/services/Services";
import Tools from "./subcomponents/tools/Tools";

import "./Home.css";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Projects />
      <Services />
      <Tools />
    </>
  );
};

export default Home;
