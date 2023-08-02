import { useLocation } from 'react-router-dom';
import './home.css';
import Footer from './Footer';
import ImageGallery from './ImageGallery';
import axios from 'axios';
import { API_BASE_URL } from './config';
import { useCallback, useState } from 'react';

const Successregister = () => {
    const [sending, setSending] = useState(false);
    const { state } = useLocation();
    const { email } = state;

    if (!email) {
        return <></>;
    }

    const resendEmail = useCallback(async () => {
        try {
            setSending(true);
            const response = await axios.post(
                `${API_BASE_URL}/auth/signup/resend-email`,
                { email },
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            setSending(false);
            console.log(response);
        } catch (error) {
            setSending(false);
            console.log(error);
        }
    }, [API_BASE_URL, email]);

    return (
        <>
            <div className="blog1">
                <h2 className="h2-description2">Complimenti hai quasi finito</h2>
            </div>
            <div className="blog1">
                <p>
                    {`We just sent an email to the address: ${email}
                    Check your email and click on the confirmation link to activate your free tokens!`}
                    <div style={{ margin: '18px 0px', textAlign: 'center' }}>
                        <button
                            onClick={resendEmail}
                            disabled={sending}
                            style={{
                                padding: '16px',
                                borderRadius: '20px',
                                color: 'white',
                                backgroundColor: '#a855f7',
                                border: 'none',
                                cursor: 'pointer'
                            }}>
                            {sending ? 'Sending...' : 'Resend Verification Email'}
                        </button>
                    </div>
                    Buon divertimento dallo staff di PinkLemon!
                </p>
            </div>
            <ImageGallery></ImageGallery>
            <Footer></Footer>
        </>
    );
};

export default Successregister;
