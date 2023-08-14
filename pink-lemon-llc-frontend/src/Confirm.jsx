import './home.css';
import Footer from './Footer';
import ImageGallery from './ImageGallery';

const Confirm = () => {

    return (
        <>
            <div className="blog1">
                <h2 className="h2-description2">
                    Congratulations, your registration was successful!
                </h2>
            </div>
            <div className="blog1">
                <p>
                    You can now proceed to the Login page and start using your tokens.

                    <br></br>
                    <br></br>
                    <br></br>

                    Enjoy your time with PinkLemon!
                </p>
            </div>
            <ImageGallery></ImageGallery>
            <Footer></Footer>
        </>
    );
};

export default Confirm;
