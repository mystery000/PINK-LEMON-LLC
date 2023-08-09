/* eslint-disable prettier/prettier */
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
                        Send
                    </Button>
                </form>
            </div>
            <div className="container">
                <p className='p-page1'>The image is generated below: size 1024x1024 pixels, PNG format. To save the image, simply hover over it with the mouse pointer, right-click, and select "Save As."</p>
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
                                
                                }
                            
                            }
                            />
                        ))}
                    </div>
                </div>
            )}
             <div className='container'> 
            <p className='p-page'>
            HOW IMAGE VARIATION GENERATION WORKS<br></br><br></br>
                1.Upload an image of size 1024x1024 pixels, PNG format: This way, PinkLemon can generate a variation, which is a second image that will have the same format as the original image, with the same style and colors, but will contain some new elements.
                <br></br><br></br>
                2.How to obtain more variations: We recommend using the same original image if you want to obtain multiple variations, rather than uploading a variation itself. This will allow you to explore more alternatives compared to starting from a single image.
                <br></br><br></br>
        
            
            </p>
            </div>
            
    
        </div>
    );
};

export default ImageVariationGenerator;
