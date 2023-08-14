/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import './home.css';
import myImage from './images/Foresta1.png';
import myImage1 from './images/Foresta2.png';
import Footer from './Footer';
import Button from '@mui/material/Button';

function Pinkpic() {

    const handleClick = async () => {
        window.location.href = `/registration`;

    }
    return (
        <>
            <div className="blog1">
                <h1 className="h1-description">Describe imagine that you want to create</h1>
            </div>

            <div className="blog1">
                <h2 className="h2-description">
                    Style, perspective, colors, and aesthetic references    
                </h2>
            </div>
            <div className='container'> 
            <div className="blog1">
               <div className='home'> 
            
               <img src={myImage} alt="Descrizione dell'immagine" className='donna'/>
               </div>
               <div className='home1'>
                                Generating images through artificial intelligence knows no bounds: there are 
                                significant potentials that can be harnessed with a proper description (prompt) of one's idea.
                                <br></br> 

                                <br></br> 
                                Type of perspective, colors to be used, the image one wants to create, 
                                aesthetic references, and style are fundamental for achieving excellent results.

                                <br></br><br></br> 
                                A creative relationship is established between the person describing 
                                the image and the neural network: and that's when the magic happens.
                
                  </div>
            </div>
            </div>
            <div>
                
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
                    <h2 className="h2-description">
                    The same description can generate different results
                    </h2>
                </div>
                
                <div className='container'> 
            <div className="blog1">
               <div className='home'> 
               
               <img src={myImage1} alt="Descrizione dell'immagine" className='donna'/>
               </div>
               <div className='home1'>
                
               There is an element of randomness that cannot be described and reduced to a rule, and it 
               concerns the interpretation that artificial intelligence derives from the description (prompt).


                            <br></br>
                            <br></br> This randomness makes image generation even more full of suggestions. 
                            No one can determine the limits: all that's left is to experiment.

                            <br></br> <br></br> 
                            Image generation through 
                            artificial intelligence doesn't replace human creativity, but rather enhances it.
                            No limits to our creativity.
            
                  </div>
            </div>
            </div>






                
             
           

            <Footer></Footer>
        </>
    );
}

export default Pinkpic;
