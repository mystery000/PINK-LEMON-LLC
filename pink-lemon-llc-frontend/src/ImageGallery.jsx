/* eslint-disable prettier/prettier */
import { useState } from 'react';
import Modal from 'react-modal';
import './ImageGallery.css';
import Button from '@mui/material/Button';
import myImage from './images/profilo di donna.jpg'; // Percorso dell'immagine
import myImage2 from './images/img1bis.png'; // Percorso dell'immagine
import myImage3 from './images/img1.png'; // Percorso dell'immagine
import myImage4 from './images/img2.png'; // Percorso dell'immagine
import myImage5 from './images/img3.png'; // Percorso dell'immagine
import myImage6 from './images/img4.png'; // Percorso dell'immagine
import myImage7 from './images/img9.png'; // Percorso dell'immagine
import myImage8 from './images/img6.png'; // Percorso dell'immagine
import myImage9 from './images/Foresta1.png'; // Percorso dell'immagine
import myImage10 from './images/img8.png'; // Percorso dell'immagine
import myImage11 from './images/Lemon.png'; // Percorso dell'immagine
import myImage12 from './images/Lumaca.png'; // Percorso dell'immagine

const ImageGallery = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { id: 1, url: myImage, description: 'desc1' },
        { id: 2, url: myImage2, description: 'desc2' },
        { id: 3, url: myImage3, description: 'desc2' },
        { id: 4, url: myImage4, description: 'desc2' },
        { id: 5, url: myImage5, description: 'desc2' },
        { id: 6, url: myImage6, description: 'desc2' },
        { id: 7, url: myImage7, description: 'desc2' },
        { id: 8, url: myImage8, description: 'desc2' },
        { id: 9, url: myImage9, description: 'desc2' },
        { id: 10, url: myImage10, description: 'desc2' },
        { id: 11, url: myImage11, description: 'desc2' },
        { id: 12, url: myImage12, description: 'desc2' }

        // Aggiungi qui altre immagini
    ];

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

    return (
        <div className="box-gallery">
            <div className="image-gallery">
                {images.map((image) => (
                    <img
                        key={image.id}
                        src={image.url}
                        alt={image.description}
                        onClick={() => openModal(image)}
                        className="gallery-image"
                    />
                ))}
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Image Modal">
                    <div className="blog1">
                        <img src={selectedImage?.url} alt={selectedImage?.description} />
                    </div>
                    <div className="btn">
                        <Button variant="contained" color="secondary" onClick={closeModal}>
                            Chiudi
                        </Button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default ImageGallery;
