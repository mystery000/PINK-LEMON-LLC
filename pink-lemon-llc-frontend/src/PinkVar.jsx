import './home.css';
import myImage from './images/Blueegg1.png';
import ImageGalleryVar from './ImageGalleryVar';
import Footer from './Footer';
import Button from '@mui/material/Button';

function PinkVar() {

    const handleClick = async () => {
        window.location.href = `/registration`;

    }
    return (
        <>
            <div className="blog1">
                <h1 className="h1-description">Alter an image with Pink Lemon</h1>
            </div>

            <div className="blog1">
                <h2 className="h2-description">It's possible to obtain endless variations</h2>
            </div>
            <div className='container'>
                <div className="blog1">
                    <div className='home'>

                        <img src={myImage} alt="Descrizione dell'immagine" className='donna' />
                    </div>
                    <div className='home1'>  The neural network will activate to generate random variations of the
                        provided image, following a logic that can produce nearly infinite results.

                        <br></br>
                        <br></br> The tool of variation, as much as or perhaps even more than image generation, represents support and not a substitutive element
                        of creativity, as it allows the image's creator to navigate through countless alternatives.

                        <br></br>
                        <br></br>Infinite variations for endless worlds: explore possibilities of image variation.</div>
                </div>
            </div>
            <br></br>


            <div className="blog1">
                <div className="action">
                    <div className="h3-action">
                        SIGN UP AND CREATE 5 IMAGES FOR FREE*
                    </div>
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        TRY NOW
                    </Button>
                    <br></br>
                    <p className="p-action">*Credit card not required.</p>
                </div>
            </div>



            <br></br>









            <div className="h2-description">
                Pink Lemon variation album
            </div>

            <ImageGalleryVar></ImageGalleryVar>

            <Footer></Footer>
        </>
    );
}

export default PinkVar;
