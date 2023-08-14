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
                        <span className='p-pink'>Upload first image, as basis.</span><br></br>
                        <Input type="file" accept="image/*" onChange={handleImageChange}
                        />
                    </label>
                    <br></br><br></br>
                    <label>
                        <span className='p-pink'>Upload "mask" image, with an empty space</span><br></br>
                        <Input type="file" accept="image/*" onChange={handleMaskChange} />
                    </label>
                    <br /> <br />
                    <label>
                        <span className='p-pink'>Describe image you want to create</span><br></br>
                        <input type="text" value={prompt} onChange={handlePromptChange}
                            placeholder="Descrivi l'immagine da generare"
                            className="text-generation"
                        />
                    </label>
                    <Button type="submit" variant="contained" color="secondary">Edit</Button>
                </form> </div>
            {editedImage && (
                <div className='blog1'>
                    <img src={editedImage} alt="Edited" style={{ maxWidth: '100%' }} />
                </div>
            )}

<div className="container">
                <p className='p-page1'>The image is generated below: size 1024x1024 pixels, PNG format. To save the image, simply hover over it with the mouse pointer, right-click, and select "Save As." </p>
            </div>
            <div className='container'> 
            <p className='p-page'>
            HOW IMAGE EDITING WORKS <br></br><br></br>
                1.Upload a 1024x1024 pixel PNG format image without empty areas as a 
                base: This way, PinkLemon can perform editing with a reference image.
                <br></br><br></br>
                2.Upload an image, the mask, of 1024x1024 pixel PNG format, with an empty area: 
                This allows PinkLemon to perform editing while already knowing where to generate a new element.
                <br></br><br></br>
                3.Describe in the text field the element you want to generate in the empty space. For example: "Create a black cat sitting in an armchair."
                <br></br> <br></br>
        
            </p>
            </div>
        </>
    );
};

export default ImageEditor;
