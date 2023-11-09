import Carousel from "./subcomponent/Carousel";
import "./Projects.css";
const Projects = () => {
  return (
    <section id="projects" className="section">
      <h1>Sample Projects</h1>
      <div>
        <Carousel />
      </div>
    </section>
  );
};

export default Projects;
