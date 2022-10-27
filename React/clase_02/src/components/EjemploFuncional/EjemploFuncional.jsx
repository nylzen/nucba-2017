import React from 'react';

export const EjemploFuncional = () => {
  return <h2>Ejemplo Funcional 1</h2>;
};

export const EjemploFuncional2 = () => {
  return <h3>Ejemplo Funcional 2</h3>;
};

export const EjemploProps = ({ pepeTexto, numerito }) => {
  return (
    <h3>
      {pepeTexto} {numerito}
    </h3>
  );
};
