import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';

import './home.css';
import Footer from './Footer';
import TabMenu from './Tabmenu';
import axios from 'axios';
import { API_URL } from './config';

export const CreditContext = createContext();
const Success = () => {
    const accessToken = useReadLocalStorage('accessToken');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${API_URL}/utente`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                setUser(response.data);
            } catch (err) {
                console.log(err?.message);
            }
        };

        fetchUser();
    }, [API_URL, accessToken]);

    const updateCredit = (n) => {
        setUser({ ...user, credit: user.credit - n });
    };

    return (
        <CreditContext.Provider value={updateCredit}>
            <div>
                {user ? (
                    <>
                        <div className="blog1">
                            <h2 className="h2-description">
                                Ciao {`${user.name} ${user.surname}`}, il tuo credito attuale è:{' '}
                                {user.credit}
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
        </CreditContext.Provider>
    );
};

export default Success;
