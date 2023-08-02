/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */

import './card.css';
import Footer from './Footer';
import TabMenuPrices from './TabMenuPrices';

function Prices() {
    return (
        <>
            <h1 className="h1-description">PRICES</h1>
            <h2 className="h2-description">1 Token = 1 Immagine</h2>
            <div className="blog1">
                <TabMenuPrices></TabMenuPrices>
            </div>
            <p></p>
            <Footer></Footer>
        </>
    );
}

export default Prices;
