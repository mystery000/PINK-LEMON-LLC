import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Contacts from './Contacts';
import Navbar from './Navbar';
import Registration from './Registration';
import Login from './Login';
import Success from './Success';
import Error from './Error';
import Pinkpic from './Pinkpic';
import PinkVar from './PinkVar';
import PinkEdit from './PinkEdit';
import Prices from './Prices';
import './app.css';
import Successregister from './Successregister';
import Confirm from './Confirm';
import { Toaster } from 'react-hot-toast';
import EmailVerification from './EmailVerification';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/Contacts" element={<Contacts />} />
                    <Route path="/Registration" element={<Registration />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Success" element={<Success />} />
                    <Route path="/Successregister" element={<Successregister />} />
                    <Route path="/Error" element={<Error />} />
                    <Route path="/Pinkpic" element={<Pinkpic />} />
                    <Route path="/Pinkvar" element={<PinkVar />} />
                    <Route path="/Pinkedit" element={<PinkEdit />} />
                    <Route path="/Prices" element={<Prices />} />
                    <Route path="/Confirm" element={<Confirm />} />
                    <Route path="/verify-email/:token" element={<EmailVerification />} />
                </Routes>
                <Toaster />
            </BrowserRouter>
        </>
    );
}

export default App;
