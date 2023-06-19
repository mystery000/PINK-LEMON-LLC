import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TabMenu from './Tabmenu';
import Footer from './Footer';
import './home.css';
import axios from 'axios';

const Success = () => {
    const location = useLocation();
    const { email, password } = location.state;
    const [isValidCredentials, setIsValidCredentials] = useState(false);
    //const [datiUtente, SetdatiUtente] = useState(null); // aggiunta

    useEffect(() => {
        (async () => {
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
                setIsValidCredentials(true);
            } catch (error) {
                setIsValidCredentials(false);
                console.log('Si è verificato un errore durante la verifica:', error);
            }
        })();
    }, [email, password]);

    return (
        <div>
            {isValidCredentials ? (
                <>
                    <div className="blog1">
                        <h2 className="h2-description">Ciao {email}, il tuo credito attuale è:</h2>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="blog1">
                        <TabMenu></TabMenu>
                    </div>

                    <Footer></Footer>
                </>
            ) : (
                <div className="blog1">
                    <h2 className="h2-description2">Credenziali non valide: accesso negato.</h2>
                </div>
            )}
        </div>
    );
};

export default Success;
