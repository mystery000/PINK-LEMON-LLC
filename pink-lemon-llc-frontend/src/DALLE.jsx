/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-unused-vars
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import './home.css';
import { API_BASE_URL } from './config';
import { useAppContext } from './context/app';

const DALLE = () => {
    const [text, setText] = useState('');
    const [generatedImage, setGeneratedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { accessToken, credit, setCredit } = useAppContext();

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const generateImage = useCallback(async () => {
        try {
            const response = await axios.post(
                `${API_BASE_URL}/images/generations`,
                {
                    prompt: text,
                    n: 1,
                    size: '1024x1024'
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            if (response.data && response.data.data && response.data.data[0].url) {
                const img = new Image();
                img.src = response.data.data[0].url;
                console.log(img.src);
                img.onload = () => {
                    setGeneratedImage(img);
                };
                setGeneratedImage(img);
                setCredit(credit - 1);
            } else {
                console.error('No image generated');
            }
        } catch (err) {
            console.log(err?.message);
        }
    }, [accessToken, text, credit]);

    return (
        <div>
            <div className="generation-form">
                <input
                    type="text"
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Descrivi l'immagine da generare in formato jpg, 1024x1024 px"
                    className="text-generation"
                />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={generateImage}
                    disabled={isLoading}>
                    {isLoading ? 'Generating...' : 'Genera ora'}
                </Button>
            </div>
            <div className="blog1">
            <p className='p-pink'>L'immagine viene generata qui sotto: dimesione 1024x1024 pixel, formato PNG.</p>
            
            </div>
            <div className="generation-form">
                {generatedImage && (
                    <div>
                        <img src={generatedImage.src} alt="Generated" />
                    </div>
                )}
             </div>
            <p>
                <b>CONSIGLI PER GENERARE IMMAGINI MIGLIORI</b>
            </p>
            <p>
                {' '}
                <b> Specifica chiaramente l'intento:</b> Inizia il tuo prompt descrivendo in modo
                chiaro e conciso ciò che desideri generare.
                <br></br><br></br>
                <b> Utilizza descrizioni dettagliate:</b> Più i dettagli sono specifici, migliori
                saranno le probabilità di ottenere un'immagine che corrisponde alle tue aspettative.
                <br></br><br></br>
                <b> Sperimenta con gli attributi di stile:</b> Ad esempio, puoi richiedere
                uno stile pittorico, un aspetto da cartoon o una resa realistica.
                <br></br> <br></br>
                <b>Esempi di riferimento: </b>Puoi fornire esempi di immagini che si
                avvicinano a ciò che stai cercando di generare.
                <br></br><br></br>
                <b>Esperimenti progressivi:</b> Se l'immagine generata non soddisfa completamente le
                tue aspettative, puoi provare ad affinare il prompt in modo incrementale.
                <br></br>
                <br></br>
                <b> Sii paziente e sperimenta:</b> LemonPink può generare immagini
                sorprendenti, ma potrebbe richiedere alcuni tentativi per ottenere i risultati
                desiderati.<br></br><br></br>
                <b>Esempio di prompt:</b> "Immagine di una foresta con i colori blu e viola che ricordi il film The BlairWitch Project".
                <br></br>

            </p>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default DALLE;
