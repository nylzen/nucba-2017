import React, { useEffect, useState } from 'react';
import { ClickButton } from '../EjemploOnClick/EjemploOnClick';

const EjemploUseEffect = () => {
  useEffect(() => {
    console.log('Fase de montaje');
  }, []);

  const [click, setClick] = useState(false);

  useEffect(() => {
    console.log('Me cambio el valor', click);
  }, [click]);

  return (
    <div>
      <ClickButton onClick={() => setClick(!click)}>Haceme Click</ClickButton>
    </div>
  );
};

export default EjemploUseEffect;
