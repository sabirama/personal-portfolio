import { Link } from "react-router-dom";

const BackEnd = (prop) => {
  return (
    <div className="card service relative" onClick={() => prop.click(2)}>
      <div className="card-text">
        <h4>Back-End Development</h4>
        <p>Create a server-side software, which focuses on everything you can`t see on a website.</p>
      </div>
      <img src="/icons/back-end.svg" alt="bac-end" className="card-img" />
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

export default BackEnd;
