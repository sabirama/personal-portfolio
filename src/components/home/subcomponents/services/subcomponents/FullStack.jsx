const FullStack = (prop) => {
  return (
    <div className="card service" onClick={() => prop.click(3)}>
      <div className="card-text">
        <h4>Full-Stack Developmnet</h4>
        <p>Create both client side (front-end) and server side (back-end) of the website.</p>
      </div>
      <img src="/icons/full-stack.svg" alt="full-stack" className="card-img" />
    </div>
  );
};

export default FullStack;
