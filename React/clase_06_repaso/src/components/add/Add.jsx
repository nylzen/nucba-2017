import React from 'react';
import { CounterButtonStyled } from './AddStyles';
import { useCountContext } from '../../context/CountContext';
import { TYPES } from '../../actionsTypes/countActions';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FaRegTimesCircle } from 'react-icons/fa';
import { RiNumber5 } from 'react-icons/ri';

export const Add = () => {
  const { dispatch } = useCountContext();

  const handleIncrement = () => dispatch({ type: TYPES.INCREMENT });

  const handleIncrement_5 = () => dispatch({ type: TYPES.INCREMENT_5 });

  const handleMultiply = () => dispatch({ type: TYPES.MULTIPLY });

  return (
    <>
      <CounterButtonStyled onClick={handleIncrement}>
        <AiOutlinePlusCircle size='32px' color='white' />
      </CounterButtonStyled>
      {/* +5 */}
      <CounterButtonStyled onClick={handleIncrement_5}>
        <p>
          +<RiNumber5 size='32px' color='white' />
        </p>
      </CounterButtonStyled>

      {/* Multiplicar */}
      <CounterButtonStyled last onClick={handleMultiply}>
        <FaRegTimesCircle size='32px' color='white' />
      </CounterButtonStyled>
    </>
  );
};
