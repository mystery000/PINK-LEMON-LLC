// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import './home.css';
import { API_BASE_URL } from './config';
import { useAppContext } from './context/app';

const createImageVariation = async (file, accessToken) => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('size', '1024x1024');

    const response = await axios.post(`${API_BASE_URL}/images/variations`, formData, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data'
        }
    });

    return response.data.data[0].url;
};

const ImageVariationGenerator = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const { accessToken, credit, setCredit } = useAppContext();

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (selectedFile) {
            let urls = [];
            for (let i = 1; i < 2; i++) {
                const url = await createImageVariation(selectedFile, accessToken);
                urls.push(url);
            }
            setImageUrls(urls);
            setCredit(credit - 1);
        }
    };

    return (
        <div>
            <div className="generation-form">
                <form onSubmit={handleSubmit}>
                    <Input
                        type="file"
                        variant="contained"
                        color="secondary"
                        onChange={handleFileChange}
                    />
                    <Button type="submit" variant="contained" color="secondary">
                        Genera una variazione
                    </Button>
                </form>
            </div>
            <div className="blog1">
            <p className='p-pink'>L'immagine viene generata qui sotto: dimesione 1024x1024 pixel, formato PNG. Per salvare l'immagine basta andarci sopra col puntatore del muose, pulsante destro e selezionare "salva con nome". </p></p>
        
            </div>
            {imageUrls.length > 0 && (
                <div>
                    <div className="generation-form">
                        {imageUrls.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`Generated Variation ${index}`}
                                style={{
                                    width: '1024px',
                                    height: '1024px',
                                    marginleft: '20px',
                                    marginRight: '20px'
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}
           <p>
                <b>COME FUNZIONA LA GENERAZIONE DI VARIAZIONI DI IMMAGINE</b>
            </p>
            <p>
                {' '}
                <b> Carica un'immagine di 1024x1024 pixel, formato PNG:</b> In questo modo PinkLemon potrà generare una variazione
                ovvero una seconda immagine che avrà lo stesso formato dell'immagine di partenza, con lo stesso stile e colori ma conterrà alcuni
                elementi di novità. <br></br>
                <br></br>
                <b> Come ottenere più variazioni:</b> Ti consigliamo di utilizzare sempre la stessa immagine di partenza se vuoi ottenere più variazioni e non di 
                caricare, ad esempio, una variazione. Questo ti permetterà di valutare più alternative rispetto ad un'immagine iniziale. <br></br>
                <br></br>
                
                
            </p>
        </div>
    );
};

export default ImageVariationGenerator;
