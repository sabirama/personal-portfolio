import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-links">
        <ul>
          <h3>Contact</h3>
          <li>markcondes21@gmail.com</li>
          <li>+639950071454</li>
        </ul>
        <ul>
          <h3>Social Links</h3>
          <li>
            <a href="https://www.discordapp.com/users/908953595427311648">discord</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mark-condes-278597281/">linked-in</a>
          </li>
          <li>
            <a href="https://github.com/sabirama">github</a>
          </li>
        </ul>
      </div>
      <span className="copyright">&copy; All Rights Reserved</span>
    </div>
  );
};

export default Footer;
