import React, { useContext } from 'react';
import { Contexto } from '../MiContexto/MiContexto';

const EjemploContexto = () => {
  // Traeme de adentro del contexto, el valor que le asignamos a colorcito y a titulo. El value al ser un objeto nos permite desestructurar.
  const { colorcito, titulo } = useContext(Contexto);
  return (
    <div>
      <h2 style={{ color: colorcito }}>{titulo}</h2>
    </div>
  );
};

export default EjemploContexto;
