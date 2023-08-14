import { useState } from 'react';
import Modal from 'react-modal';
import './ImageGallery.css';
import Button from '@mui/material/Button';
import myImage from './images/Blueegg1.png'; // Percorso dell'immagine
import myImage2 from './images/Blueegg2.png'; // Percorso dell'immagine
import myImage3 from './images/Blueegg3.png'; // Percorso dell'immagine
import myImage4 from './images/Blueegg4.png'; // Percorso dell'immagine
import myImage5 from './images/Blueegg5.png'; // Percorso dell'immagine
import myImage6 from './images/Blueegg6.png'; // Percorso dell'immagine
import myImage7 from './images/Blueegg7.png'; // Percorso dell'immagine
import myImage8 from './images/Blueegg8.png'; // Percorso dell'immagine


const ImageGalleryVar = () => {
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
                        <Button variant="contained" color="secondary" onClick={closeModal}>Chiudi</Button>
                    </div>
                </Modal>
            </div>
        </div>
    );
};

export default ImageGalleryVar;
