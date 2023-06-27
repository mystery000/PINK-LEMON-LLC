import { useContext, useState } from 'react';
import axios from 'axios';
import { useReadLocalStorage } from 'usehooks-ts';
import { API_URL } from './config';

import { CreditContext } from './Success';

const ImageEditor = () => {
    const updateCredit = useContext(CreditContext);

    const [image, setImage] = useState(null);
    const [mask, setMask] = useState(null);
    const [prompt, setPrompt] = useState('');
    const [editedImage, setEditedImage] = useState(null);
    const accessToken = useReadLocalStorage('accessToken');

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
            const response = await axios.post(`${API_URL}/images/edits`, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            setEditedImage(response.data.data[0].url);
            updateCredit(1);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Image Editor</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Image:
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </label>
                <br />
                <label>
                    Mask:
                    <input type="file" accept="image/*" onChange={handleMaskChange} />
                </label>
                <br />
                <label>
                    Prompt:
                    <input type="text" value={prompt} onChange={handlePromptChange} />
                </label>
                <br />
                <button type="submit">Edit Image</button>
            </form>
            {editedImage && (
                <div>
                    <h3>Edited Image:</h3>
                    <img src={editedImage} alt="Edited" style={{ maxWidth: '100%' }} />
                </div>
            )}
        </div>
    );
};

export default ImageEditor;
