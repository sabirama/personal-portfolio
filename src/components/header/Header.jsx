import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header id="header">
      <HashLink to={"/#"}>HOME</HashLink>
      <nav>
        <HashLink to={"/#projects"}>Projects</HashLink>
        <HashLink to={"/#services"}>Services</HashLink>
        <a href="mailto:markcondes21@gmail.com">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
