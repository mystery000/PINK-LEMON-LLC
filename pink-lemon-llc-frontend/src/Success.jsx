import { useEffect, useState } from 'react';

import './home.css';
import Footer from './Footer';
import TabMenu from './Tabmenu';
import axios from 'axios';
import { API_URL } from './config';
import { useAppContext } from './context/app';

const Success = () => {
    const [user, setUser] = useState(null);
    const { accessToken, setAccessToken, setCredit, credit } = useAppContext();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${API_URL}/user`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                setUser(response.data);
                setCredit(response.data.credit);
            } catch (err) {
                console.log(err?.message);
            }
        };

        fetchUser();
    }, [accessToken]);

    return (
        <div>
            {user ? (
                <>
                    <div className="blog1">
                        <h2 className="h2-description">
                            Ciao {`${user.name} ${user.surname}`}, il tuo credito attuale è:{' '}
                            {credit}
                        </h2>
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
