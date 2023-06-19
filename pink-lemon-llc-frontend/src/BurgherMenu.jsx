import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
        <button className="burger-icon" onClick={toggleMenu}>
          <span className={`line ${isOpen ? 'line-open' : ''}`} />
          <span className={`line ${isOpen ? 'line-open' : ''}`} />
          <span className={`line ${isOpen ? 'line-open' : ''}`} />
        </button>
      </div>

      <ul className={`menu-items ${isOpen ? 'menu-open' : ''}`}>
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="active"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName="active"
            onClick={toggleMenu}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="active"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BurgerMenu;


