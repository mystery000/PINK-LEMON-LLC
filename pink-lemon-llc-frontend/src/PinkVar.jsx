/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import './home.css';
import myImage from './images/Blueegg1.png';
import ImageGalleryVar from './ImageGalleryVar';
import Footer from './Footer';

function PinkVar() {
    return (
        <>
            <div className="blog1">
                <h1 className="h1-description">Fai l'upload di un'immagine</h1>
            </div>

            <div className="blog1">
                <h2 className="h2-description">E' possibile ottenere infinite variazioni</h2>
            </div>
            <div className='container'> 
            <div className="blog1">
               <div className='home'> 
               
               <img src={myImage} alt="Descrizione dell'immagine" className='donna'/>
               </div>
               <div className='home1'>  La rete neurale si attiverà per generare variazioni casuali
                            dell'immagine fornita seguendo una logica che può produrre risultati
                            pressoché infiniti.<br></br>
                            <br></br> Lo strumento della variazione, al pari o forse anche più della
                            generazione di immagini, rappresenta un supporto e non un elemento
                            sostituivo della creatività in quanto consente a chi pensa l'immagine di
                            navigare entro infinite alternative. <br></br>
                            <br></br>Infinite variazioni per mondi infiniti: esplorare le possibilità senza arrivare subito al risultato finale.</div>
            </div>
            </div>







            

            <div className="h2-description">
                Variazioni di immagini create dall'AI
            </div>

            <ImageGalleryVar></ImageGalleryVar>

            <Footer></Footer>
        </>
    );
}

export default PinkVar;
