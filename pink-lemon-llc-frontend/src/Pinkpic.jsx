/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import './home.css';
import myImage from './images/Foresta1.png';
import myImage1 from './images/Foresta2.png';
import Footer from './Footer';


function Pinkpic() {
    return (
        <>
            <div className="blog1">
                <h1 className="h1-description">Descrivi l'immagine che vuoi realizzare</h1>
            </div>

            <div className="blog1">
                <h2 className="h2-description">
                    Stile, prospettiva, colori e riferimenti estetici
                </h2>
            </div>
            <div className="contaier">
                <div className="blog2">
                    <div>
                        <img src={myImage} alt="Descrizione dell'immagine" className="img" />
                    </div>
                    <div>
                        <p className="img-description">
                            <div className="img-span">Immagine di una foresta con i colori blu e viola che ricordi il film "The BlairWitch Project"</div>
                            La generazioni di immagini attraverso l'intelligenza artificiale non ha limiti: grandi potenzialità che 
                            possono sfruttare con una corretta descrizione (prompt) della propria idea.
                            <br></br> Tipo di prospettiva, colori da utilizzare, immagine che si vuole creare, riferimenti estetici e stile sono
                            elementi fondamentali per ottenere ottimi risultati. 
                            
                            <br></br>
                            Si instaura tra chi pensa e descrive l'immagine e la rete neuronale che interpreta
                            la richiesta un rapporto creativo. E la magia si realizza.

                        </p>
                    </div>
                </div>
                <div className="blog1">
                <h2 className="h2-description">
                    La stessa descrizione può generare risultati diversi
                </h2>
            </div>

                <div className="blog2">
                    <div>
                        <img src={myImage1} alt="Descrizione dell'immagine" className="img" />
                    </div>
                    <div>
                        <p className="img-description">
                            <div className="img-span">Immagine di una foresta con i colori blu e viola che ricordi il film "The BlairWitch Project"</div>
                            C'è una componente di casualità che non può essere descritta e ridotta a regola e riguarda l'interpretazione 
                            che l'intelligenza artificiale da della descrizione (prompt).
                            <br></br> Questa casualità rende la generazione di immagini ancor più foriera di suggestioni. Nessuno può dire quali siano i limiti: non resta che sperimentare.
                            La generazione di immagini attraverso l'intelligenza artificiale non sostituisce la creatività dell'uomo ma la esalta.
                            
                    

                        </p>
                    </div>
                </div>

            </div>

            

            
            

            <Footer></Footer>
        </>
    );
}

export default Pinkpic;
