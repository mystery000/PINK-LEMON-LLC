/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import './home.css';
import Footer from './Footer';
import Button from '@mui/material/Button';
import ImageGallery from './ImageGallery';
import myImage from './images/profilo_di_donna.jpg';

function Home() {
    const handleClick = async () => {
        window.location.href = `/registration`;
    };

    return (
        <>
        
            <div className="blog1">
                <h1 className="h1-description">Immagine, Describe, Create</h1>
            </div>

            <div className="blog1">
                <h2 className="h2-description">
                Expand the possibilities of your creativity with AI
                </h2>
            </div>
          

          <div className='container'> 
            <div className="blog1">
               <div className='home'> 
               
               <img src={myImage} alt="Descrizione dell'immagine" className='donna'/>
               </div>
               <div className='home1'> Many elements of this image have been generated from a brief textual description. The woman has her eyes closed, perhaps she is sleeping. Or perhaps, like in a Shakespearean tragedy, the woman dreams of dreaming. Even the definition of the profile, the fact that the nape disappears into the night of the background, is entirely random. Maybe the textual description was already the outline of a dream. The dream of a woman who is sleeping, whose thoughts fly away with the wind. With artificial intelligence, it is possible to describe one's imaginings and bring them to life.</div>
            </div>
            </div>
           

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

            <div className="h2-description">Pink Lemon Album</div>

            <ImageGallery></ImageGallery>

            <Footer></Footer>
           
        </>
    );
}

export default Home;
