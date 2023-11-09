import BackEnd from "./subcomponents/BackEnd";
import FrontEnd from "./subcomponents/FrontEnd";
import FullStack from "./subcomponents/FullStack";

const Services = () => {
  return (
    <section id="services" className="section">
      <h1>Services</h1>
      <div className="container space-evenly">
        <FrontEnd />
        <BackEnd />
        <FullStack />
      </div>
    </section>
  );
};

export default Services;
