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

            <div className='container'> 
            <div className="blog1">
               <div className='home'> 
               
               <img src={myImage} alt="Descrizione dell'immagine" className='donna'/>
               </div>
               <div className='home1'> E' possibile modificare un'immagine con Pink Lemon in modo che 
               venga generato un nuovo elemento al posto di uno spazio appositamente lasciato vuoto.<br></br>
               Per modificare un'immagine occorre un'immagine di partenza di 1024x1024 pixel, formato
               png, una seconda immagine con uno spazio vuoto sempre dello stesso formato e una breve descrizione testuale.
               <br></br>In questo modo è possibile descrivere le proprie immaginazioni e realizzarle. L'immagine con lo spazio vuoto si chiama "maschera".</div>
            </div>
            </div>

                <div className="blog1">
                    <h2 className="h2-description">"Genera un'anguria sulla poltrona"</h2>
                </div>

                <div className="blog3" style={{ textAlign: 'center' }}>
                    <div className="edit-margin">
                        <img src={myImage1} alt="Descrizione dell'immagine" className="img" />
                        <img src={myImage2} alt="Descrizione dell'immagine" className="img" />
                    </div>
                </div>
            

            <Footer></Footer>
        </>
    );
}

export default PinkEdit;
