import { Link } from "react-router-dom";

const BackEnd = (prop) => {
  return (
    <div className="card service relative" onClick={() => prop.click(2)}>
      <div className="card-text">
        <h4>Back-End Development</h4>
        <p>Create a server-side software, which focuses on everything you can`t see on a website.</p>
      </div>
      <img src="./icons/back-end.svg" alt="back-end" className="card-img" />
      <div className="overlay">
        <h4 className="overlay-text">
          <p>More Details...</p>
          <p>
            Have a Project in Mind?{<br />}
            <Link to="/contact">Contact Me...</Link>
          </p>
        </h4>
      </div>
    </div>
  );
};

export default BackEnd;
