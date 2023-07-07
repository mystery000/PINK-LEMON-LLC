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
            <h2 className="h2-description">
                Presto sarà possibile acquistare token con pacchetti e abbonamenti
            </h2>

            <div className="blog1">
                <TabMenuPrices></TabMenuPrices>
            </div>
            <p>
                * <b>La guida ai migliori prompt è in italiano</b> ed è uno strumento fondamentale
                per imparare a descrivere l'immagine che si vuole generare. <br></br>
            </p>

            <Footer></Footer>
        </>
    );
}

export default Prices;
