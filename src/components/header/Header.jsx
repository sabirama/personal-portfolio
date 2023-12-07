import { HashLink } from "react-router-hash-link";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <HashLink to={"/#"}>
        <img src="./icons/logo.svg" alt="home" className="home" />
      </HashLink>
      <nav>
        <HashLink to={"/#projects"}>Projects</HashLink>
        <HashLink to={"/#services"}>Services</HashLink>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
