/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { React, useCallback, useState } from 'react';

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
            <h1 className="h1-description">Aggiorna la tua password</h1>
            <h2 className="h2-description"> Inserisci la tua email e seleziona invia</h2>
            <div className='recovery'>
                <input type="email" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className='recovery'>
                    <button onClick={() => navigate(-1)}> Reset</button>
                    <button onClick={sendEmail}> Invia </button>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
