// eslint-disable-next-line no-unused-vars
import React, { useCallback, useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import axios from 'axios';
import Button from '@mui/material/Button';
import './home.css';
import { API_URL } from './config';

const DALLE = () => {
    const [text, setText] = useState('');
    const [generatedImage, setGeneratedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const accessToken = useReadLocalStorage('accessToken');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const generateImage = useCallback(async () => {
        try {
            const response = await axios.post(
                `${API_URL}/images/generations`,
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
            } else {
                console.error('No image generated');
            }
        } catch (err) {
            console.log(err?.message);
        }
    }, [accessToken, text]);

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
                <h2 className="h2-description2">L'immagine viene generata qui sotto</h2>
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
                <b> Specifica chiaramente l intento:</b> Inizia il tuo prompt descrivendo in modo
                chiaro e conciso ciò che desideri generare. Fornisci dettagli sulla forma, il
                colore, la disposizione degli oggetti, le pose, le espressioni facciali o qualsiasi
                altro aspetto rilevante dell'immagine che vuoi generare. <br></br>
                <br></br>
                <b> Utilizza descrizioni dettagliate:</b> Più i dettagli sono specifici, migliori
                saranno le probabilità di ottenere un'immagine che corrisponde alle tue aspettative.
                Usa descrizioni precise per gli oggetti, le caratteristiche e le relazioni spaziali
                tra gli elementi. <br></br>
                <br></br>
                <b> Sperimenta con gli attributi di stile:</b> Puoi influenzare lo stile e l'aspetto
                generale dell'immagine utilizzando attributi specifici. Ad esempio, puoi richiedere
                uno stile pittorico, un aspetto da cartoon o una resa realistica. Esplora diverse
                combinazioni per ottenere risultati interessanti. <br></br>
                <br></br> <b>Esempi di riferimento: </b>Puoi fornire esempi di immagini che si
                avvicinano a ciò che stai cercando di generare. Puoi anche fornire esempi di
                immagini simili che possono servire come guida per l'output desiderato. <br></br>
                <br></br>
                <b>Esperimenti progressivi:</b> Se l immagine generata non soddisfa completamente le
                tue aspettative, puoi provare ad affinare il prompt in modo incrementale. Modifica
                leggermente le descrizioni, gli attributi o le specifiche dell'immagine per ottenere
                risultati più precisi. <br></br>
                <br></br> <b> Sii paziente e sperimenta:</b> LemonPink può generare immagini
                sorprendenti, ma potrebbe richiedere alcuni tentativi per ottenere i risultati
                desiderati. Sii paziente, sperimenta con diversi prompt e cerca di capire come
                LemonPink interpreta e risponde ai tuoi input. <br></br>
            </p>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default DALLE;
