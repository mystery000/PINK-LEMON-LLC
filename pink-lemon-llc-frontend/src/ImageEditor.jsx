/* eslint-disable prettier/prettier */
import { useState } from 'react';

import axios from 'axios';
import { API_BASE_URL } from './config';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useAppContext } from './context/app';

const ImageEditor = () => {
    const [image, setImage] = useState(null);
    const [mask, setMask] = useState(null);
    const [prompt, setPrompt] = useState('');
    const [editedImage, setEditedImage] = useState(null);
    const { accessToken, credit, setCredit } = useAppContext();

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleMaskChange = (event) => {
        setMask(event.target.files[0]);
    };

    const handlePromptChange = (event) => {
        setPrompt(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('mask', mask);
        formData.append('prompt', prompt);
        formData.append('size', '1024x1024');
        formData.append('n', '1');

        try {
            const response = await axios.post(`${API_BASE_URL}/images/edits`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            setEditedImage(response.data.data[0].url);
            setCredit(credit - 1);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className='blog1'>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span className='p-pink'>Carica l'immagine iniziale, 1024x1024 pixel, formato PNG</span><br></br>
                        <Input type="file" accept="image/*" onChange={handleImageChange}
                        />
                    </label>
                    <br></br><br></br>
                    <label>
                        <span className='p-pink'>Carica la maschera, 1024x1024 pixel, formato PNG</span><br></br>
                        <Input type="file" accept="image/*" onChange={handleMaskChange} />
                    </label>
                    <br /> <br />
                    <label>
                        <span className='p-pink'>Descrivi l'immagine che vuoi ottenere</span><br></br>
                        <input type="text" value={prompt} onChange={handlePromptChange}
                            placeholder="Descrivi l'immagine da generare"
                            className="text-generation"
                        />
                    </label>
                    <Button type="submit" variant="contained" color="secondary">Edita</Button>
                </form> </div>
            {editedImage && (
                <div className='blog1'>
                    <img src={editedImage} alt="Edited" style={{ maxWidth: '100%' }} />
                </div>
            )}

<div className="container">
                <p className='p-page1'>L'immagine viene generata qui sotto: dimesione 1024x1024 pixel, formato PNG. Per salvare l'immagine basta andarci sopra col puntatore del mouse, pulsante destro e selezionare "salva con nome". </p>
            </div>
            <div className='container'> 
            <p className='p-page'>
            COME FUNZIONA L'EDITING DI UN'IMMAGINE <br></br><br></br>
                1.Carica un'immagine di 1024x1024 pixel formato PNG, senza zone vuote come base: in questo modo PinkLemon può effettuare l'editing
                a partire da un riferimento.
                <br></br><br></br>
                2.Carica un'immagine, la maschera, di 1024x1024 pixel formato PNG, con una zona vuota: In questo modo PinkLemon può effettuare l'editing
                sapendo già dove generare nuovo elemento.
                <br></br><br></br>
                3.Descrivi nel campo di testo l'elemento che vuoi generare nello spazio vuoto. Ad esempio:"crea un gatto nero seduto in poltrona".
                <br></br> <br></br>
            
            </p>
            </div>
        </>
    );
};

export default ImageEditor;
