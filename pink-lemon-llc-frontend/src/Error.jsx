/* eslint-disable prettier/prettier */
import './home.css';
import Footer from './Footer';

function Error() {
    return (
        <>
            <div className="blog1">
                <h2 className="h2-description2">Invalid credentials: access denied.</h2>
            </div>
            <p>
            Please check if the email and password are correct and try logging in again.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer></Footer>
        </>
    );
}

export default Error;
