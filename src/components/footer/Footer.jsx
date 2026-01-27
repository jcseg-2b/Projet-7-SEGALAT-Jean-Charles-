import "./Footer.css";
import Logo from "../../assets/LOGO-2.png";
function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Kasa Logo" className="footer-logo" />
      <p className="footer-text">
        © 2020 Kasa. All
        <br className="mobile-br" />
        rights reserved
      </p>
    </footer>
  );
}

export default Footer;
