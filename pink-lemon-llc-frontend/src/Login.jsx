/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import './registration.css';
import Footer from './Footer';
import { API_BASE_URL } from './config';
import { Button } from '@mui/material';
import { useAppContext } from './context/app';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { accessToken, setAccessToken } = useAppContext();
    const navigate = useNavigate();

    const handleSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post(
                    `${API_BASE_URL}/auth/login`,
                    { email, password },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                );

                const { accessToken } = response.data;
                setAccessToken(accessToken);

                if (accessToken) {
                    navigate('/success', { state: { email, password } });
                } else {
                    navigate('/error');
                }
            } catch (error) {
                console.log('Si è verificato un errore durante la richiesta:' + error);
            }
        },
        [email, password]
    );

    return (
        <>
            <h2 className="h1-description">Accedi</h2>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="EMAIL"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="PASSWORD"
                        />
                    </div>
                    <div
                        onClick={() => navigate('/forgot-password')}
                        style={{
                            color: 'blueviolet',
                            textAlign: 'center',
                            margin: '16px 0px',
                            cursor: 'pointer'
                        }}>
                        Password dimenticata?
                    </div>
                    <div
                        onClick={() => navigate('/Registration')}
                        style={{
                            color: 'blueviolet',
                            textAlign: 'center',
                            margin: '16px 0px',
                            cursor: 'pointer'
                        }}>
                        Registrati
                    </div>
                    <div className="btn-cen">
                        <Button variant="contained" color="secondary" type="submit">
                            INVIA
                        </Button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;
