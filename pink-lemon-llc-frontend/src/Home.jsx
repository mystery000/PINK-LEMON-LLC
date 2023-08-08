/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import './home.css';

import Footer from './Footer';
import Button from '@mui/material/Button';
import ImageGallery from './ImageGallery';
import myImage from './images/profilo_di_donna.jpg';

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
          

          <div className='container'> 
            <div className="blog1">
               <div className='home'> 
               
               <img src={myImage} alt="Descrizione dell'immagine" className='donna'/>
               </div>
               <div className='home1'>  Molti elementi di questa immagine sono stati generati
            spontamentamente a partire da una breve descrizione testuale.
            La donna ha gli occhi chiusi, forse sta dormendo. O forse come in una tragedia di
            Shakespeare la donna sogna di sognare. Anche la definizione del profilo, il fatto che la nuca si perda
            nella notte dello sfondo è del tutto casuale. Forse la descrizione testuale era già
            l'abbozzo di un sogno. Il sogno di una donna che sta dormendo, i cui pensieri volano via
            col vento. Con l'intelligenza artificiale è possibile descrivere le proprie immaginazioni e realizzarle.</div>
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
