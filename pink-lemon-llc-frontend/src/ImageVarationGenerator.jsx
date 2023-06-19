// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import './home.css';

const createImageVariation = async (file) => {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('size', '1024x1024');
  const API_KEY = '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';

  const response = await axios.post('https://api.openai.com/v1/images/variations', formData, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'multipart/form-data',
    }
  });

  return response.data.data[0].url;
};

const ImageVariationGenerator = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      let urls = [];
      for (let i = 1; i < 2; i++) {
        const url = await createImageVariation(selectedFile);
        urls.push(url);
      }
      setImageUrls(urls);
    }
  };

  return (
    <div>
      <div className='generation-form' >  
      <form onSubmit={handleSubmit}>
        <Input  type="file" variant="contained" color="secondary" onChange={handleFileChange} />
        <Button type="submit" variant="contained" color="secondary">Genera una variazione</Button>
      </form>
      
      </div>
      <div className='blog1'><h2 className='h2-description2'>L'immagine viene generata qui sotto</h2></div>
      {imageUrls.length > 0 && (
        <div> 
          <div className='generation-form'>
          
          {imageUrls.map((url, index) => (
            <img key={index} src={url} alt={`Generated Variation ${index}`} style={{width: '1024px', height: '1024px', marginleft:'20px', marginRight:'20px'}} />
          ))}
          
        </div>
        </div>
      )}
       <p><b>COME FUNZIONA LA GENERAZIONE DI VARIAZIONI DI IMMAGINE</b></p>
      <p> <b>  Specifica chiaramente l'intento:</b> Inizia il tuo prompt descrivendo in modo chiaro e conciso ciò che desideri generare. Fornisci dettagli sulla forma, il colore, la disposizione degli oggetti, le pose, le espressioni facciali o qualsiasi altro aspetto rilevante dell immagine che vuoi generare. <br></br> 
          <br></br><b>  Utilizza descrizioni dettagliate:</b> Più i dettagli sono specifici, migliori saranno le probabilità di ottenere unimmagine che corrisponde alle tue aspettative. Usa descrizioni precise per gli oggetti, le caratteristiche e le relazioni spaziali tra gli elementi. <br></br> 
          <br></br><b> Sperimenta con gli attributi di stile:</b> Puoi influenzare lo stile e l aspetto generale dell immagine utilizzando attributi specifici. Ad esempio, puoi richiedere uno stile pittorico, un aspetto da cartoon o una resa realistica. Esplora diverse combinazioni per ottenere risultati interessanti. <br></br> 
          <br></br> <b>Esempi di riferimento: </b>Puoi fornire esempi di immagini che si avvicinano a ciò che stai cercando di generare. Puoi anche fornire esempi di immagini simili che possono servire come guida per l output desiderato. <br></br> 
          <br></br><b>Esperimenti progressivi:</b> Se immagine generata non soddisfa completamente le tue aspettative, puoi provare ad affinare il prompt in modo incrementale. Modifica leggermente le descrizioni, gli attributi o le specifiche dell immagine per ottenere risultati più precisi. <br></br> 
          <br></br> <b> Sii paziente e sperimenta:</b> LemonPink può generare immagini sorprendenti, ma potrebbe richiedere alcuni tentativi per ottenere i risultati desiderati. Sii paziente, sperimenta con diversi prompt e cerca di capire come LemonPink interpreta e risponde ai tuoi input. <br></br> 
</p>
    </div>
  );
};

export default ImageVariationGenerator;
