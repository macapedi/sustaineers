import './Header.scss';
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
    return (
        <header className='header'>
            <div className='header__logo-container'>
                <Link to="/home" className='header__logo-link'>
                    <img src={logo} alt="sustaineers logo" className='header__logo'></img>
                    <p>Sustaineers</p>
                </Link>
            </div>
            <div className='header__nav-bar'>
                <Link to="/profiles/:id" className='header__logo-link'>
                    Profile
                </Link>
                <Link to="/profiles" className='header__logo-link'>
                    Community
                </Link>
                <Link className='header__logo-link'>
                    LOGOUT
                </Link>

            </div>


        </header>
    );
}

export default Header;