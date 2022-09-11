import "./Header.scss";
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/home" className="header__logo-link">
          <img src={logo} alt="sustaineers logo" className="header__logo"></img>
          <p className="header__title">Sustaineers</p>
        </Link>
      </div>
      <div className="header__nav-bar">
        <FaStar color="gold" size={40} />

        <Link to="/profiles" className="header__link">
          <BsPeopleFill className="header__icons" size={40} />
        </Link>
        <Link to="/profiles/user1" className="header__link">
          <CgProfile className="header__icons" size={40} />
        </Link>

        <Link to="/landing" className="header__link">
          <FiLogOut className="header__icons" size={40} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
