import { Link } from "react-router-dom";

const FrontEnd = (prop) => {
  return (
    <div className="card service relative" onClick={() => prop.click(1)}>
      <div className="card-text">
        <h4>Front-End Development</h4>
        <p>
          Create websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to
          access and interact with the site or app.
        </p>
      </div>
      <img src="/icons/front-end.svg" alt="front-end" className="card-img" />
      <div className="overlay">
        <h4 className="overlay-text">
          <h3>More Details...</h3>
          <a href="#">
            Have a Project in Mind?{<br />}
            <Link to="/contact">Contact Me...</Link>
          </a>
        </h4>
      </div>
    </div>
  );
};

export default FrontEnd;
