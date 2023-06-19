import Card from './Card';
import './card.css';
import Footer from './Footer';

function Prices() {
    return (
        <>
            <h1 className="h1-description">PRICES</h1>

            <h2 className="h2-description">1 token = 1 immagine</h2>

            <div className="blog1">
                <Card></Card>
            </div>
            <p>
                * "La guida ai migliori prompt" è in italiano ed è uno strumento fondamentale per
                imparare a descrivere l'immagine che si vuole generare. <br></br>
                <br></br>
                ** Il supporto è sempre erogato in italiano.
            </p>
            <h2 className="h2-description">PINK FANS AT THE MOMENT</h2>
            <h2 className="h2-description">
                +200 clienti | +60.000 nuove immagini | +8.000 versioni{' '}
            </h2>
            <Footer></Footer>
        </>
    );
}

export default Prices;
