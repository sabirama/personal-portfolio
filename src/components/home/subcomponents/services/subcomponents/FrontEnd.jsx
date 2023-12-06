const FrontEnd = (prop) => {
  return (
    <div className="card service" onClick={() => prop.click(1)}>
      <div className="card-text">
        <h4>Front-End Development</h4>
        <p>
          Create websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to
          access and interact with the site or app.
        </p>
      </div>
      <img src="/icons/front-end.svg" alt="front-end" className="card-img" />
    </div>
  );
};

export default FrontEnd;
