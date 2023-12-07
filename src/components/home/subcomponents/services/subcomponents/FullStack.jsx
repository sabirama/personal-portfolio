import { Link } from "react-router-dom";

const FullStack = (prop) => {
  return (
    <div className="card service relative" onClick={() => prop.click(3)}>
      <div className="card-text">
        <h4>Full-Stack Developmnet</h4>
        <p>Create both client side (front-end) and server side (back-end) of the website.</p>
      </div>
      <img src="/icons/full-stack.svg" alt="full-stack" className="card-img" />
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

export default FullStack;
