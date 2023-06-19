import { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';
import TabMenu from './Tabmenu';
import Footer from './Footer';
import './home.css';


const Success = () => {
  const location = useLocation();
  const { email, password } = location.state;
  const [isValidCredentials, setIsValidCredentials] = useState(false);
  //const [datiUtente, SetdatiUtente] = useState(null); // aggiunta

  
  useEffect(() => {

 
    const verifyCredentials = async () => {
      try {
        const data = { email, password };

        const response = await fetch('http://localhost:8080/api/utente/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          //body: JSON.stringify(data)
          data
        });

        const isValid = await response.json();
        //const utente = await response.json();// aggiunta
        //SetdatiUtente(utente);// aggiunta

        setIsValidCredentials(isValid);
      } catch (error) {
        console.log('Si è verificato un errore durante la verifica:', error);
      }
    };

    verifyCredentials();
  }, [email, password]);

  

  return (
    
    
 
    <div>
      
      {isValidCredentials ? (
         <>
        <div className='blog1'>
        <h2 className='h2-description'>Ciao {email}, il tuo credito attuale è:</h2></div> 
        <br></br>
        <br></br>
        <div className='blog1'>
        <TabMenu></TabMenu>
        </div>
        
       
       
      <Footer></Footer>
      </>
      ) : (
        <div className='blog1'><h2 className='h2-description2'>Credenziali non valide: accesso negato.</h2></div>
      )}
    </div>
    
  );
};

export default Success;
