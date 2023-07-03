/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable prettier/prettier */
import './home.css';
import myImage from './images/img1copia.png';
import myImage1 from './images/arm2mask.png';
import myImage2 from './images/arm3copia.png';
import Footer from './Footer';


function PinkEdit() {
    return (
        <>
            <div className="blog1">
                <h1 className="h1-description">Modifica un'immagine con l'AI</h1>
            </div>

            <div className="blog1">
                <h2 className="h2-description">
                    Fai l'upload dell' immagine originale
                </h2>
            </div>
            <div className="contaier">
                <div className="blog2">
                    <div>
                        <img src={myImage} alt="Descrizione dell'immagine" className="img" />
                    </div>
                    <div>
                        <p className="img-description">
                            <div className="img-span">Immagine originale generata con l'AI</div>
                            Le dimesioni dell'immagine originale e della maschera devono coincedere e per utilizzare PinkLemon devono essere di 1024x1024 pixel, formato png.
                            <br></br> Oltre a caricare due immagini è necessario descrivere l'immagine si vuole ottenere riempendo lo spazio lasciato vuoto nella maschera: si tratta
                            un prompt analogo a quello usato per la generazione di immagini da zero.                            <br></br>
                            Un'immagine di partenza, una maschera e un prompt: e la magia si realizza.

                        </p>
                    </div>
                </div>
                <div className="blog1">
                <h2 className="h2-description">
                    Fai l'upload anche della maschera e scrivi un prompt preciso</h2>      
            </div>
            <div className="blog1">
                <h2 className="h2-description">
                    "Genera un'anguria sulla poltrona"</h2>      
            </div>


                <div className="blog3">
                    <div className='edit-margin'>
                        <img src={myImage1} alt="Descrizione dell'immagine" className="img" />
                    </div>
                    <div className='edit-margin'>
                    <img src={myImage2} alt="Descrizione dell'immagine" className="img" />
                    </div>
                </div>

            </div>

            

            
            

            <Footer></Footer>
        </>
    );
}

export default PinkEdit;
