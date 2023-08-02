/* eslint-disable prettier/prettier */

import './home.css';
import Footer from './Footer';
import ImageGallery from './ImageGallery';

const Confirm = () => {

    return (
        <>
            <div className="blog1">
                <h2 className="h2-description2">
                    Complimenti, la registrazione è andata a buon fine!
                </h2>
            </div>
            <div className="blog1">
                <p>
                    Ora puoi andare alla pagina di Login e iniziare ad utilizzare i tuoi token.
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

export default Confirm;
