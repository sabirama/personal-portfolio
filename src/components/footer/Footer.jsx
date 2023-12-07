import disconrd from "../../assets/img-icons/discord.svg";
import linkedin from "../../assets/img-icons/linkedin.svg";
import github from "../../assets/img-icons/github.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-links">
        <div className="container col">
          <h3>Contact</h3>
          <ul className="col">
            <li>markcondes21@gmail.com</li>
            <li>+639950071454</li>
          </ul>
        </div>
        <div className="container col">
          <h3>Social Links</h3>
          <ul>
            <li>
              <a href="https://www.discordapp.com/users/908953595427311648">
                <img src={disconrd} alt="discord" className="icon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mark-condes-278597281/">
                <img src={linkedin} alt="linkedin" className="icon" />
              </a>
            </li>
            <li>
              <a href="https://github.com/sabirama">
                <img src={github} alt="github" className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span className="copyright">&copy; All Rights Reserved</span>
    </div>
  );
};

export default Footer;
