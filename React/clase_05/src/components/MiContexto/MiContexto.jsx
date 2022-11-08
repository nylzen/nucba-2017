import React, { createContext } from 'react';

export const Contexto = createContext();

export const ContextoProvider = ({ children }) => {
  return (
    <Contexto.Provider
      value={{ colorcito: 'crimson', titulo: 'Titulo que está en el Contexto' }}
    >
      {children}
    </Contexto.Provider>
  );
};
