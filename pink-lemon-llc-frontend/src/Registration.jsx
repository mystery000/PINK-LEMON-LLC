import { useState } from 'react';
import Footer from './Footer';
import { Button} from '@mui/material';
import './registration.css';
import { useNavigate} from 'react-router-dom';


const Registration = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const token = '01111966';
  const credito= 25;

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    window.location.href = `/successregister/${token}`;

    const data = { name, surname, password, email, credito };

    try {
      const response = await fetch('http://localhost:8080/api/utente/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),

      }
      
      );

      if (!response.ok) {
        navigate('/errorregister'); // Reindirizza al componente per la verifica riuscita;

      } else {
        navigate('/successregister'); // Reindirizza al componente per la verifica riuscita;
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <>
 <h1 className="h1-description"> REGISTRATI E RICEVI 5 TOKEN GRATUITI</h1>
 <h2 className="h2-description"> Crea, varia e modifica immagini di 1024x1024 pixel</h2>
<div className='form-container'>



    <form onSubmit={handleSubmit}>
      <label>

        <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder='NOME'  />
      </label><br></br> 
      <label>
  
        <input type="text" value={surname} onChange={e => setSurname(e.target.value)} required placeholder='COGNOME' />
      </label><br></br>
      <label>
      
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required  placeholder='PASSWORD'/>
      </label><br></br>
      <label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required  placeholder='EMAIL'/>
      </label><br></br>
      <div className='btn-cen'>
      <Button variant="contained" color="secondary" type="submit" >Invia</Button>
      </div>
    </form>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Registration

