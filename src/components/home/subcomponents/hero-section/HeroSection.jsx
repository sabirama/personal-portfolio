import { HashLink } from "react-router-hash-link";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section id="hero" className="section">
      <div>
        <h1 className="name">MARK CONDES</h1>
        <h2 className="role">Full-stack Web Developer</h2>
      </div>
      <div>
        <p className="introduction">
          Philippine based developer. I am dedicated to bringing ideas to life through web development. With a passion
          for both creativity and functionality, I specialize in designing and building user-friendly websites that will
          not only look good but also provide comfortable and engaging experiences.
        </p>
        <p className="message">Feel free to explore my portfolio!</p>
      </div>

      <div>
        <HashLink to="#services">
          <span>Check Services</span>
        </HashLink>
        <a href="mailto:markcondes21@gmail.com">
          <span>Email Me</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
