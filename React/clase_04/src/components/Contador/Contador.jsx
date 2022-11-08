import React, { useState } from 'react';
import { CounterButton, CounterContainer } from './ContadorStyles';

const Contador = () => {
  // Nombre del estado y función que lo actualiza (setNombreDelEstado)
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterContainer>
      <CounterButton onClick={decrement}>-</CounterButton>
      <span>{count}</span>
      <CounterButton onClick={increment}>+</CounterButton>
    </CounterContainer>
  );
};

export default Contador;
