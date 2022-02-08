import React, { useState } from 'react'



function App() {

  //State de la frase
  const [frase, clickFrase] = useState({});

  const consultaAPI = async() => {
    const request = await fetch('https://los-simpsons-quotes.herokuapp.com/v1/quotes');
    const result = await request.json();

    clickFrase(result[0]);
  };





  return (
    <div>
      <h1>Frases de los Simposons</h1>
      <section>Frase</section>
      <button
      onClick = {consultaAPI}
      >La Jalea</button>

    </div>


  );
}

export default App;
