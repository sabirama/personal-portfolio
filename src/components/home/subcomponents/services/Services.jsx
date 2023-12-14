/* eslint-disable react/no-unescaped-entities */
import BackEnd from "./subcomponents/BackEnd";
import FrontEnd from "./subcomponents/FrontEnd";
import FullStack from "./subcomponents/FullStack";

import "./Services.css";
import { useState } from "react";

const Services = () => {
  const [val, setVal] = useState(0);
  const clickHandler = (value) => {
    setVal(value);
  };

  return (
    <section id="services" className="section">
      <h1>Services</h1>
      <div className="container center p-1">
        <div className="col-container p-1 center">
          <FrontEnd click={clickHandler} />

          {val === 1 ? (
            <div className="mw-300">
              <h4>Front End Development</h4>
              <div>
                <p>
                  Using Figma, HTML5, CSS3 and Javascrpit, I can create a static website for clients based on given
                  Design or create it all from scratch.
                </p>
                <p>
                  Or, use React.js along with Vite.js Node.js for more better website performance and faster
                  development.
                </p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="col-container p-1 center">
          <BackEnd click={clickHandler} />
          {val === 2 ? (
            <div className="mw-300">
              <h4>Back End Development</h4>
              <div>
                <p>
                  Using Laravel framework and Laragon for database management, I can create a back-end application that
                  can be connected to the front-end with API's.
                </p>
                <p>
                  Along with these tools, I use Postman for checking API endpoints to ensure fast and quality responses
                  from the database.
                </p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="col-container p-1 center">
          <FullStack click={clickHandler} />
          {val === 3 ? (
            <div className="mw-300">
              <h4>Full Stack Development</h4>
              <div>
                <p>
                  Combining the process for creating front-end and back-end application, I can create a fully functional
                  website.
                </p>
                <p>
                  Using REST API and fetch request for passing data from back-end to front-end, as well as testing for
                  bugs to ensure quality of website.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Services;
