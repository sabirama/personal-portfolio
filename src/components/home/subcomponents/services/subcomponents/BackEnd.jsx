const BackEnd = (prop) => {
  return (
    <div className="card service" onClick={() => prop.click(2)}>
      <div className="card-text">
        <h4>Back-End Development</h4>
        <p>Create a server-side software, which focuses on everything you can`t see on a website.</p>
      </div>

      <img src="/icons/back-end.svg" alt="bac-end" className="card-img" />
    </div>
  );
};

export default BackEnd;
