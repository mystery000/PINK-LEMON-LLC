import { useNavigate } from 'react-router-dom';
import { React, useCallback, useState } from 'react';
import ImageGallery from './ImageGallery';
import Footer from './Footer';


import './recovery.css';
import axios from 'axios';
import { API_BASE_URL } from './config';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const sendEmail = useCallback(async () => {
        if (!email) return;

        try {
            setError(null);
            const response = await axios.post(
                `${API_BASE_URL}/auth/forgot-password`,
                { email },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            setEmail('');
        } catch (error) {
            setError(error);
            console.log(error);
        }
    }, [email]);

    return (
        <>
            <h1 className="h1-description">Update your password</h1>
            <h2 className="h2-description"> Insert your email and click "send" button</h2>
            <br></br><br></br>
            <div className='recovery'>
                <input type="email" className='text-recovery' placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className='recovery'>

                    <button onClick={sendEmail} className='btn-recovery'> Send </button>
                    <button onClick={() => navigate(-1)} className='btn-recovery'> Reset</button>
                </div>
            </div>
            <br></br><br></br>
            <br></br><br></br>
            <div className="h2-description">Pink Lemon Album</div>



            <ImageGallery></ImageGallery>
            <Footer></Footer>


        </>
    );
};

export default ForgotPassword;
