/* eslint-disable prettier/prettier */
import { useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE_URL } from './config';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Resetpassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [resetting, setResetting] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    if (!token) return <></>;

    const resetPassword = useCallback(async () => {
        if (confirmPassword !== password) {
            toast.error('The confirmation password does not match the password.');
            return;
        }

        try {
            setError(null);
            setResetting(true);
            const response = await axios.post(
                `${API_BASE_URL}/auth/reset-password`,
                {
                    token: token,
                    password: password
                },
                { headers: { 'Content-Type': 'application/json' } }
            );
            setResetting(false);
            toast.success('Updated password successfully.');
            navigate('/Login');
        } catch (error) {
            setResetting(false);
            setError(error);
            console.log(error);
        }
    }, [token, password, confirmPassword]);

    if (error) {
        return (
            <>
                <div style={{ textAlign: 'center', color: 'red' }}>{error?.response?.data}</div>
            </>
        );
    }
    return (
        <>
            <div style={{ textAlign: 'center', margin: '24px 0px' }}>
                Reset Password Form
                <br />
                <label htmlFor="password">New Password: </label>
                <br />
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <div>Confirm New Password</div>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <br />
                <button onClick={resetPassword}> {resetting ? 'Processing...' : 'Submit'}</button>
            </div>
        </>
    );
};

export default Resetpassword;
