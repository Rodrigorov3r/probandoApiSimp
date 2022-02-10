import React, { useState } from 'react'
import Frase from './Components/Frase';



function App() {

  //State de la frase
  const [frase, clickFrase] = useState({});

  const consultaAPI = async () => {
    const request = await fetch(
      'https://los-simpsons-quotes.herokuapp.com/v1/quotes'
    );
    const result = await request.json();

    clickFrase(result[0]);
  };


  return (
    <div>
      <h1>Frases de los Simposons</h1>
      <Frase
        frase = {frase}
      />
      <button
      onClick = {consultaAPI}
      >La Jalea</button>
    </div>  


  );
}

export default App;
