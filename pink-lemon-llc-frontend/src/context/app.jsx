import { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hook/useLocalStorage';

const initialState = {
    credit: 0,
    accessToken: '',
    setCredit: () => {},
    setAccessToken: () => {}
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error(`useAppContext must be used within a AppContextProvider`);
    }
    return context;
};

export const AppContext = createContext(initialState);

AppContext.displayName = 'AppContext';

const AppContextProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
    const [credit, setCredit] = useState(0);

    return (
        <AppContext.Provider value={{ credit, setCredit, accessToken, setAccessToken }}>
            {children}
        </AppContext.Provider>
    );
};

export const ManagedAppContext = ({ children }) => {
    return <AppContextProvider>{children}</AppContextProvider>;
};
