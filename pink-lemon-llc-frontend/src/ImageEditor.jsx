import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from './config';
import { useAppContext } from './context/app';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

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
                </form>
                {editedImage && (
                    <div>
                        <h3>Edited Image:</h3>
                        <img src={editedImage} alt="Edited" style={{ maxWidth: '100%' }} />
                    </div>
                )}
            </div>
            <div className='blog1'>
                <p className='p-pink'>L'immagine viene generata qui sotto: dimesione 1024x1024 pixel, formato PNG. Per salvare l'immagine basta andarci sopra col puntatore del muose, pulsante destro,  e selezionare "salva con nome". </p>
            </div>
            <p>
                <b>COME FUNZIONA LA GENERAZIONE DI VARIAZIONI DI IMMAGINE</b>
            </p>
            <p>
                <b> Carica un'immagine di 1024x1024 pixel, formato PNG:</b> In questo modo PinkLemon potrà generare una variazione
                ovvero una seconda immagine che avrà lo stesso formato dell'immagine di partenza, con lo stesso stile e colori ma conterrà alcuni
                elementi di novità. <br></br>
                <br></br>
                <b> Come ottenere più variazioni:</b> Ti consigliamo di utilizzare sempre la stessa immagine di partenza se vuoi ottenere più variazioni e non di
                caricare, ad esempio, una variazione. Questo ti permetterà di valutare più alternative rispetto ad un'immagine iniziale. <br></br>
            </p>

        </>
    );
};

export default ImageEditor;
