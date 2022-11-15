import React from 'react';
import {
  CounterContainerStyled,
  CounterSpanStyled,
  CounterButtonContainerStyled,
} from './CounterStyles';
import Reset from '../Reset/Reset';
import Substract from '../Substract/Substract';
import Add from '../Add/Add';
import { useSelector } from 'react-redux';

const Counter = () => {
  const state = useSelector(state => state.counter);
  return (
    <CounterContainerStyled>
      <CounterButtonContainerStyled>
        <Substract />
        <CounterSpanStyled>{state.count}</CounterSpanStyled>
        <Add />
      </CounterButtonContainerStyled>

      <Reset />
    </CounterContainerStyled>
  );
};

export default Counter;
