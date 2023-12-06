import BackEnd from "./subcomponents/BackEnd";
import FrontEnd from "./subcomponents/FrontEnd";
import FullStack from "./subcomponents/FullStack";

import "./Services.css";

const Services = () => {
  const clickHandler = (value) => {
    console.log(value);
  };

  return (
    <section id="services" className="section">
      <h1>Services</h1>
      <div className="container space-evenly">
        <FrontEnd click={clickHandler} />
        <BackEnd click={clickHandler} />
        <FullStack click={clickHandler} />
      </div>
    </section>
  );
};

export default Services;
