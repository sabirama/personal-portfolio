import { useEffect, useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  let [id, setId] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(-400);

  function prev() {
    setId((id - 1 + 3) % 3);
    console.log(id);
  }

  function next() {
    setId((id + 1) % 3);
    console.log(id);
  }

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setCarouselWidth(-400);
    } else {
      setCarouselWidth(-1000);
    }
    
  }, [window.innerWidth]);

  return (
    <div>
      <div className="carousel">
        <div
          className="carousel-container"
          style={{ transform: `translateX(${carouselWidth * id}px)`, transitionDuration: "1s" }}
        >
          <div id="0" className="carousel-item">
            <a href="https://sabirama.github.io/mp1.gadgetbyte" className="site-link">
              <p>Gadgetbyte</p>
              <img src="/mp1.jpg" alt="site-1" className="web-image" />
            </a>
          </div>
          <div id="1" className="carousel-item">
            <a href="https://pokemon-tcg-mp2.onrender.com" className="site-link">
              <p>Poke TCG Pulse</p>
              <img src="/mp2.jpg" alt="site-2" className="web-image" />
            </a>
          </div>
          <div id="2" className="carousel-item">
            <a href="https://readersshelf.onrender.com/" className="site-link">
              <p>Readers Shelf</p>
              <img src="/capstone.jpg" alt="site-3" className="web-image" />
            </a>
          </div>
        </div>
        <div className="controls">
          <button onClick={prev} className="prev">
            {"<"}
          </button>
          <button onClick={next} className="next">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
