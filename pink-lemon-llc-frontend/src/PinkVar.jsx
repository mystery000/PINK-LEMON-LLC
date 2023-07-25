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
            <div className="contaier">
                <div className="blog2">
                    <div>
                        <img src={myImage} alt="Descrizione dell'immagine" className="img" />
                    </div>
                    <div>
                        <p className="img-description">
                            <div className="img-span">
                                Non importa se sia stata generata con l'Ai, l'importante è
                                rispettare il formato
                            </div>
                            La rete neurale si attiverà per generare variazioni casuali
                            dell'immagine fornita seguendo una logica che può produrre risultati
                            pressoché infiniti.
                            <br></br> Lo strumento della variazione, al pari o forse anche più della
                            generazione di immagini, rappresenta un supporto e non un elemento
                            sostituivo della creatività in quanto consente a chi pensa l'immagine di
                            navigare entro infinite alternative del mondo pensato. Infinite
                            alternative per mondi infiniti.
                        </p>
                    </div>
                </div>
            </div>

            <div className="h2-description">
                Variazioni di immagini create dall'AI a partire da un upload
            </div>

            <ImageGalleryVar></ImageGalleryVar>

            <Footer></Footer>
        </>
    );
}

export default PinkVar;
