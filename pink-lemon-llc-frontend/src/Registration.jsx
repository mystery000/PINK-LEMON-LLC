import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';
import ImageGallery from './ImageGallery';


// Import components and stylesheets
import './registration.css';
import Footer from './Footer';
import { API_BASE_URL } from './config';
import { toast } from 'react-hot-toast';

const Registration = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = { name, surname, password, email };

        try {
            await axios.post(`${API_BASE_URL}/auth/signup`, payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            toast.success('Verification email is successfully sent');
            navigate(`/successregister`, { state: { email } }); // Redirect to component for successful verification;
        } catch (error) {
            navigate('/Errorregister'); // Redirect to component for successful verification;
            console.error('There was an error!', error);
        }
    };

    return (
        <>
            <h1 className="h1-description"> SIGN UP AND RECEIVE 5 FREE TOKENS</h1>
            <h2 className="h2-description"> Create, modify, and edit images of 1024x1024 pixels</h2>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="NAME"
                        />
                    </label>
                    <br></br>
                    <label>
                        <input
                            type="text"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required
                            placeholder="SURNAME"
                        />
                    </label>
                    <br></br>
                    <label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="PASSWORD"
                            className='text-area'
                        />
                    </label>
                    <br></br>
                    <label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="EMAIL"
                        />
                    </label>
                    <br></br>
                    <div className="btn-cen">
                        <Button variant="contained" color="secondary" type="submit">
                            SEND
                        </Button>
                    </div>
                </form>

            </div>
            <div className="h2-description">Pink Lemon Album</div>
            <ImageGallery></ImageGallery>

            <Footer></Footer>
        </>
    );
};

export default Registration;
