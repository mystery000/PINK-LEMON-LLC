import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Contacts from './Contacts';
import Login from './Login';
import Registration from './Registration';
import Successregister from './Successregister';
import Error from './Error';
import Success from './Success';
import Prices from './Prices';
import Pinkpic from './Pinkpic';
import PinkVar from './PinkVar';
import PinkEdit from './PinkEdit';
import Confirm from './Confirm';
import Confirmpay from './Confirmpay';
import { Toaster } from 'react-hot-toast';
import Errorregister from './Errorregister';
import Resetpassword from './ResetPassword';
import ForgotPassword from './ForgotPassword';
import { ManagedAppContext } from './context/app';
import EmailVerification from './EmailVerification';
import Navbar2 from './Navbar2';

function App() {
    return (
        <>
            <ManagedAppContext>
                <BrowserRouter>
                    <Navbar2 />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/Contacts" element={<Contacts />} />
                        <Route path="/Registration" element={<Registration />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Success" element={<Success />} />
                        <Route path="/Successregister" element={<Successregister />} />
                        <Route path="/error" element={<Error />} />
                        <Route path="/errorregister" element={<Errorregister />} />
                        <Route path="/Pinkpic" element={<Pinkpic />} />
                        <Route path="/Pinkvar" element={<PinkVar />} />
                        <Route path="/Pinkedit" element={<PinkEdit />} />
                        <Route path="/Prices" element={<Prices />} />
                        <Route path="/Confirm" element={<Confirm />} />
                        <Route path="/Confirmpay" element={<Confirmpay />} />
                        <Route path="/verify-email/:token" element={<EmailVerification />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/reset-password/:token" element={<Resetpassword />} />
                    </Routes>
                    <Toaster />
                </BrowserRouter>
            </ManagedAppContext>
        </>
    );
}

export default App;
