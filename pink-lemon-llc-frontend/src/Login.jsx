import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './registration.css';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:8000/api/auth/login',
                { email, password },
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            const { accessToken } = response.data;

            if (accessToken) {
                navigate('/success', { state: { email, password } });
            } else {
                navigate('/error');
            }
        } catch (error) {
            console.log('Si è verificato un errore durante la richiesta:' + error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Invia</button>
            </form>
        </div>
    );
};

export default Login;
