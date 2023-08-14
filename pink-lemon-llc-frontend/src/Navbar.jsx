import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './navbar.css';
//import Logo from './images/PinkLemonLogo.png'; // Percorso dell'immagine

export default function Navbar() {
    return (
        <>
            <div className="container1">
                <header className="navbar-app">
                    <div>
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
