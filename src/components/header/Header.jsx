import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/LOGO.png";

function Header() {
  return (
    <header>
      <div className="header-content">
        <img src={logo} alt="Kasa Logo" className="logo" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
