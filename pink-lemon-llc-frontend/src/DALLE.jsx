/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-unused-vars
import React, { useCallback, useState } from 'react';

import './home.css';
import axios from 'axios';
import { API_BASE_URL } from './config';
import Button from '@mui/material/Button';
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
            setIsLoading(true);
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
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
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
            <div className="container">
                <p className='p-page1'>The image is generated below: size 1024x1024 pixels, PNG format. To save the image, simply hover over it with the mouse pointer, right-click, and select "Save As."</p>
            </div>
            <div className="generation-form">
                {generatedImage && (
                    <div>
                        <img src={generatedImage.src} alt="Generated" className='generated' />
                    </div>
                )}
            </div>

            <div className='container'> 
            <p className='p-page'>
                TIPS FOR GENERATING BETTER IMAGES <br></br><br></br>
                1.Clearly specify intent: Start your prompt by clearly and concisely describing what you want to generate.
                <br></br><br></br>
                2.Use detailed descriptions: The more specific the details, the better the chances of 
                getting an image that meets your expectations.
                <br></br><br></br>
                3.Experiment with style attributes: For instance, you can request a 
                painterly style, a cartoonish look, or a realistic rendering.
                <br></br> <br></br>
                4.Reference examples: You can provide sample images that resemble what you're trying to generate.
                <br></br><br></br>
                5.Progressive experimentation: If the generated image doesn't fully meet your expectations, you can try refining the prompt incrementally.
                <br></br><br></br>
                
                6.Be patient and experiment: LemonPink can produce amazing images, but it might take a few attempts to achieve the desired results.<br></br><br></br>

                Example prompt: "Image of a forest with blue and purple hues reminiscent of The Blair Witch Project film."
                <br></br><br></br>
            
            </p>
            </div>
           
           


           
        </div>
    );
};


export default DALLE;
