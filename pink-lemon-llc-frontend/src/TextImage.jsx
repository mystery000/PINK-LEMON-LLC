import React from 'react';
import './ComponentStyles.css'; // Assumi che tu abbia un file di stili CSS per questo componente
import myImage from './images/profilo_di_donna.jpg';



const TextImage = () => {
  return (
    <div className="container1">
      <div className="image">
        <img src={myImage} alt="Descrizione dell'immagine" />
      </div>
      <div className="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non feugiat justo, at gravida magna.</p>
      </div>
    </div>
  );
}

export default TextImage;
