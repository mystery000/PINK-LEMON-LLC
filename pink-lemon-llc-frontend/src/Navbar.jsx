import { NavLink } from 'react-router-dom';
import './navbar.css';
import Logo from './images/Pinklemon Logo.png'; // Percorso dell'immagine

export default function Navbar() {
    return (
        <>
            <div className="container">
                <header className="navbar-app">
                    <div>
                        <NavLink to="/" className="navbar-link-logo">
                            <img src={Logo} alt="Descrizione dell'immagine" className="logo" />
                        </NavLink>{' '}
                    </div>
                    <div className="nav">
                        {/** Abbiamo <Link> e <NavLink> (usiamo il secondo perché customizzabile)
                         *  il to="" corrisponde al mio link in href
                         * In pagina avrò <a class="navbar__item" href="/about">About</a>
                         */}

                        <NavLink to="/Pinkpic" className="navbar-link">
                            PinkPic
                        </NavLink>

                        <NavLink to="/PinkVar" className="navbar-link">
                            PinkVar
                        </NavLink>

                        <NavLink to="/PinkEdit" className="navbar-link">
                            PinkEdit
                        </NavLink>

                        <NavLink to="/Prices" className="navbar-link">
                            Prices
                        </NavLink>

                        <NavLink to="/login" className="navbar-link">
                            Login
                        </NavLink>
                    </div>
                </header>
            </div>
        </>
    );
}
