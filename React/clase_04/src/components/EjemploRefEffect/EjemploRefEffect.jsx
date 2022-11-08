import React, { useEffect, useRef } from 'react';
import { ClickButton } from '../EjemploOnClick/EjemploOnClick';

const EjemploRefEffect = () => {
  const inputRef = useRef();
  const printValue = () => {
    console.log(inputRef.current.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type='text' placeholder='User' />
      <br />
      <input type='text' placeholder='Pass' />
      <br />
      <ClickButton onClick={printValue}>Enviar</ClickButton>
    </div>
  );
};

export default EjemploRefEffect;
