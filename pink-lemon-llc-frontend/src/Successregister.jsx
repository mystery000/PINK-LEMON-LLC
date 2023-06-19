import { useParams } from 'react-router-dom';
import './home.css';
import Footer from './Footer';
import ImageGallery from './ImageGallery';

const Successregister = () => {
    const { token } = useParams();

    if (token != '01111966') {
        return null;
    }

    return (
        <>
            <div className="blog1">
                <h2 className="h2-description2">
                    Complimenti ora puoi utilizzare i 128 Token gratuiti
                </h2>
            </div>
            <div className="blog1">
                <p>
                    Vai alla pagina di Login e inserisci i dati forniti in fase di registrazione.
                    Nellarea riservata troverai la guida ai migliori prompt per generare immagini
                    sempre più creative.
                    <br></br>
                    <br></br>
                    <br></br>
                    Buon divertimento dallo staff di PinkLemon!
                </p>
            </div>
            <ImageGallery></ImageGallery>
            <Footer></Footer>
        </>
    );
};

export default Successregister;
