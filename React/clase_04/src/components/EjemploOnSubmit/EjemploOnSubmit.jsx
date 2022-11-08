import React from 'react';
import { ClickButton } from '../EjemploOnClick/EjemploOnClick';

const EjemploOnSubmit = () => {
  const handleSubmit = e => {
    e.preventDefault();
    alert('Formulario enviado');
  };

  return (
    <form onSubmit={handleSubmit}>
      <ClickButton type='submit'>Enviar</ClickButton>
    </form>
  );
};

export default EjemploOnSubmit;
