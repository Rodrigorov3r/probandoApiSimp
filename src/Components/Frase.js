import React from 'react';

const Frase = ({ frase }) => {
  return (
    <div>
      <p>{frase.quote}</p>
      <p>{frase.author}</p>
    </div>
  );
};

export default Frase;
