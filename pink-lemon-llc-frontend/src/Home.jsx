/* eslint-disable react/no-unescaped-entities */
import './home.css';
import myImage from './images/profilo_di_donna.jpg';
import Footer from './Footer';
import Button from '@mui/material/Button';
import ImageGallery from './ImageGallery';

function Home() {
    const handleClick = async () => {
        window.location.href = `/registration`;
    };

    return (
        <>
            <div className="blog1">
                <h1 className="h1-description">Immagina, Descrivi, Realizza.</h1>
            </div>

            <div className="blog1">
                <h2 className="h2-description">
                    Espandi le possibilità della tua creatività con l'IA.
                </h2>
            </div>
            <div className="contaier">
                <div className="blog2">
                    <div>
                        <img src={myImage} alt="Descrizione dell'immagine" className="img" />
                    </div>
                    <div>
                        <p className="img-description">
                            <div className="img-span">Profilo di donna con i capelli al vento</div>
                            Tutti gli elementi di questa immagine sono stati generati
                            spontamentamente dall'IA, a partire da una breve descrizione testuale.
                            La donna ha gli occhi chiusi, forse sta dormendo.<br></br> O forse, come
                            in una tragedia di Shakespeare, la donna sogna di sognare. Anche la
                            definizione del profilo, il fatto che la nuca si perda nella notte dello
                            sfondo è stata generata dall'IA.<br></br> Forse la descrizione testuale
                            era già l'abbozzo di un sogno. Il sogno di una donna che sta sognando, i
                            cui pensieri volano via nella notte.
                        </p>
                    </div>
                </div>
            </div>

            <div className="blog1">
                <div className="action">
                    <div className="h3-action">
                        RICEVI 5 TOKEN GRATUITI E GENERA IMMAGINI UNICHE*
                    </div>
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        PROVA ORA
                    </Button>
                    <br></br>
                    <p className="p-action">*Non è richiesta la carta di credito.</p>
                </div>
            </div>


            <div className="h2-description">Raccolta di immagini create con Pink Lemon</div>

            <ImageGallery></ImageGallery>

            <Footer></Footer>
        </>
    );
}

export default Home;
