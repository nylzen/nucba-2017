import React, { useContext, useReducer } from 'react';
import styled from 'styled-components';
import { Contexto } from '../MiContexto/MiContexto';

export const ReducerButton = styled.button`
  padding: 1.5rem 4rem;
  background: var(--primary);
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const EjemploUseReducer = () => {
  const initialState = '';

  const reducer = (state, action) => {
    switch (action.type) {
      case 'rojo':
        return '#e63946';
      case 'verde':
        return '#2a9d8f';
      case 'azul':
        return '#0081a7';
      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { titulo } = useContext(Contexto);

  return (
    <div>
      <h2 style={{ color: state }}>{titulo}</h2>
      <ReducerButton
        style={{ backgroundColor: '#e63946' }}
        onClick={() => dispatch({ type: 'rojo' })}
      >
        Rojo
      </ReducerButton>
      <ReducerButton
        style={{ backgroundColor: '#2a9d8f' }}
        onClick={() => dispatch({ type: 'verde' })}
      >
        Verde
      </ReducerButton>
      <ReducerButton
        style={{ backgroundColor: '#0081a7' }}
        onClick={() => dispatch({ type: 'azul' })}
      >
        Azul
      </ReducerButton>
    </div>
  );
};

export default EjemploUseReducer;
