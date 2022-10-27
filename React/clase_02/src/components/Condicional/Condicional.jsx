import React from 'react';
import {
  EjemploProps,
  // EjemploFuncional2,
} from '../EjemploFuncional/EjemploFuncional';

const Condicional = () => {
  const mostrar = false;

  // return (
  //   <div>
  //     {mostrar ? (
  //       <h1>Esto es un condicional y está en true</h1>
  //     ) : (
  //       <h2>Esto es un condicional y está en false</h2>
  //     )}
  //   </div>
  // );

  return <div>{mostrar ? <EjemploProps numerito={11} /> : ''}</div>;
};

export default Condicional;
