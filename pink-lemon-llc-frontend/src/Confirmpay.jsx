import './home.css';
import Footer from './Footer';
import ImageGallery from './ImageGallery';

const Confirmpay = () => {
    return (
        <>
            <div className="blog1">
                <h2 className="h2-description2">
                Congratulations, the payment was successful!
                </h2>
            </div>
            <div className="blog1">
                <p>
                Now you can proceed to the Login page and start using your tokens.
                    <br></br>
                    <br></br>
                    <br></br>
                    Enjoy your time with PinkLemon!
            </div>
            <ImageGallery></ImageGallery>
            <Footer></Footer>
        </>
    );
};

export default Confirmpay;