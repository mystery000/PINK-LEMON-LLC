import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const EmailVerification = () => {
    const { token } = useParams();
    const [error, setError] = useState(null);
    const [redirecting, setRedirecting] = useState(false);
    const navigate = useNavigate();

    if (!token) return <></>;

    useEffect(() => {
        const verify = async () => {
            setError(null);
            try {
                setRedirecting(true);
                const response = await axios.get(
                    `http://localhost:8000/api/auth/signup/verify-email?token=${token}`
                );
                setRedirecting(false);
                toast.success('Congratulation! Email is verified successfully.');
                navigate('/Login');
            } catch (error) {
                setRedirecting(false);
                setError(error);
                console.log(error);
            }
        };
        verify();
    }, [token, setError, setRedirecting]);

    if (redirecting) {
        return (
            <div style={{ textAlign: 'center', fontSize: '24px', color: 'green' }}>
                Redirecting...
            </div>
        );
    }

    if (error) {
        return <div style={{ textAlign: 'center', fontSize: '24px', color: 'red' }}>{error}</div>;
    }

    return (
        <>
            <div style={{ textAlign: 'center', fontSize: '24px', color: 'green' }}>
                Email Verification Success
            </div>
        </>
    );
};

export default EmailVerification;
