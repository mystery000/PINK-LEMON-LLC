import axios from 'axios';
import { React, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from './config';
import { toast } from 'react-hot-toast';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const sendEmail = useCallback(async () => {
        if (!email) return;

        try {
            setError(null);
            const response = await axios.post(
                `${API_URL}/auth/forgot-password`,
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
            <div>Update your password</div>
            <div>Enter your email address and select Send Email.</div>
            <label>Email</label>
            <br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div>
                <button onClick={() => navigate(-1)}> Cancel </button>
                <button onClick={sendEmail}> Send Email </button>
            </div>
        </>
    );
};

export default ForgotPassword;
