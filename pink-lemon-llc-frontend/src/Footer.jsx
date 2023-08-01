//import Logo from './Logo';

import './navbar.css';

export default function Footer() {
    return (
        <>
            <div className="footbar-app">
                <div className='footer-link'>
              
                    {/** Abbiamo <Link> e <NavLink> (usiamo il secondo perché customizzabile)
                     *  il to="" corrisponde al mio link in href
                     * In pagina avrò <a class="navbar__item" href="/about">About</a>
                     */}
                    PINK LEMON LLC - 3946, 1603 Capitol Avenue, Suite 413, Cheyenne, WY, Laramie, US, 82001. All rights reserved.
                </div>
                </div>
           
        </>
    );
}
