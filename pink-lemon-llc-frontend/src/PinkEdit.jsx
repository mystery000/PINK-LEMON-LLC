/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable prettier/prettier */
import './home.css';
import myImage from './images/img1copia.png';
import myImage1 from './images/arm2mask.png';
import myImage2 from './images/arm3copia.png';
import Footer from './Footer';
import Button from '@mui/material/Button';

function PinkEdit() {

    const handleClick = async () => {
        window.location.href = `/registration`;

    }

    return (
        <>
            <div className="blog1">
                <h1 className="h1-description">Edit an image with AI</h1>
            </div>
            <div className="blog1">
                <h2 className="h2-description">Make the impossible appear</h2>
            </div>

            <div className='container'> 
            <div className="blog1">
               <div className='home'> 
               
               <img src={myImage} alt="Descrizione dell'immagine" className='donna'/>
               </div>
               <div className='home1'> 
                    It's possible to edit an image using Pink Lemon in a way that a new element is generated in place of a specifically left empty space.
                    <br></br><br></br>To edit an image, you need an initial image with dimensions of 1024x1024 pixels, in png format, a second image with an empty space in the same format, and a brief textual description.
                    <br></br><br></br>This way, you can describe your own imaginings and bring them to life. The image with the empty space is called the "mask."

</div>
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

                <div className="blog1">
                    <h2 className="h2-description">"Generate a watermelon on the armchair"</h2>
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
