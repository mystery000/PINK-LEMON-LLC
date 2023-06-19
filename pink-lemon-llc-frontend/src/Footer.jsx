//import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Footer() {
    return (
        <>
            <div className="footbar-app">
                <div className="nav">
                    {/** Abbiamo <Link> e <NavLink> (usiamo il secondo perché customizzabile)
                     *  il to="" corrisponde al mio link in href
                     * In pagina avrò <a class="navbar__item" href="/about">About</a>
                     */}
                    <NavLink to="/" className="navbar-link">
                        Home
                    </NavLink>

                    <NavLink to="/services" className="navbar-link">
                        Services
                    </NavLink>

                    <NavLink to="/contacts" className="navbar-link">
                        Contact
                    </NavLink>
                </div>
            </div>
        </>
    );
}
