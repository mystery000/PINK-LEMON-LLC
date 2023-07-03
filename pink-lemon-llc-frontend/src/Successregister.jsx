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
                    Complimenti hai quasi finito
                </h2>
            </div>
            <div className="blog1">
                <p>
                   Controlla la tua email e clicca sul link di conferma per attivare i tuoi token gratuiti!
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
