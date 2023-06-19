import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './registration.css';




const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password
      
    
    };

   
        try {
          const response = await fetch('http://localhost:8080/api/utente/login',{
        
        method: 'POST',
        headers: {
       'Content-Type': 'application/json'
      },
       data
      });

      
      const isValidCredentials = await response.json();

      if (isValidCredentials) {
        navigate('/success', { state: { email, password } });

      } else {
        navigate('/error');
      }
    } catch (error) {
      console.log('Si è verificato un errore durante la richiesta:'+ error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Invia</button>
      </form>
    </div>

  
  );
};

export default Login;
