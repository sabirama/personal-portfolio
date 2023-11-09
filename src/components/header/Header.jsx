import { HashLink } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <HashLink to={"/#"}>
        <img src="./icons/logo.svg" alt="home" className="home" />
      </HashLink>
      <nav>
        <HashLink to={"/#projects"}>Projects</HashLink>
        <HashLink to={"/#services"}>Services</HashLink>
        <a href="mailto:markcondes21@gmail.com">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
