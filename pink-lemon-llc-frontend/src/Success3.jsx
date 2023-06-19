import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    const { email, password } = location.state;

    useEffect(() => {
        // Esegui qui la seconda verifica con il backend utilizzando email e password
        // ...
    }, [email, password]);

    return (
        <div>
            <h1>Area Riservata</h1>
            <p>Benvenuto!</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
    );
};

export default Success;
