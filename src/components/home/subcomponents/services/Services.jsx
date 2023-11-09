import BackEnd from "./subcomponents/BackEnd";
import FrontEnd from "./subcomponents/FrontEnd";
import FullStack from "./subcomponents/FullStack";

import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="section">
      <h1>Services</h1>
      <div className="container space-evenly">
        <FrontEnd />
        <BackEnd />
        <FullStack />
      </div>

      <div className="col-container">
        <h2>Tools</h2>
        <div className="tools-container">
          <span>
            <img src="/icons/html.svg" alt="html" className="icon tools" />
            <p>HTML</p>
          </span>
          <span>
            <img src="/icons/css.svg" alt="css" className="icon tools" />
            <p>CSS</p>
          </span>
          <span>
            <img src="/icons/javascript.svg" alt="javascript" className="icon tools" />
            <p>Javascript</p>
          </span>
          <span>
            <img src="/icons/figma.svg" alt="figma" className="icon tools" />
            <p>Figma</p>
          </span>
          <span>
            <img src="/icons/Node.svg" alt="node" className="icon tools" />
            <p>Node.js</p>
          </span>
          <span>
            <img src="/icons/React.svg" alt="react" className="icon tools" />
            <p>React.js</p>
          </span>
          <span>
            <img src="/icons/Vite.svg" alt="vite" className="icon tools" />
            <p>Vite.js</p>
          </span>
          <span>
            <img src="/icons/laragon.svg" alt="laragon" className="icon tools" />
            <p>Laragon</p>
          </span>
          <span>
            <img src="/icons/laravel.svg" alt="laravel" className="icon tools" />
            <p>Laravel</p>
          </span>
          <span>
            <img src="/icons/MySql.svg" alt="mysql" className="icon tools" />
            <p>MySql</p>
          </span>
          <span>
            <img src="/icons/Postman.svg" alt="postman" className="icon tools" />
            <p>Postman</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
