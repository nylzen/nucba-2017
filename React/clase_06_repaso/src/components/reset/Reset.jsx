import React from 'react';
import { BiReset } from 'react-icons/bi';
import { useCountContext } from '../../context/CountContext';
import { TYPES } from '../../actionsTypes/countActions';

const Reset = () => {
  const { dispatch } = useCountContext();
  const handleReset = () => dispatch({ type: TYPES.RESET });
  return (
    <BiReset
      cursor='pointer'
      size='38px'
      color='#F24C4C'
      onClick={handleReset}
    />
  );
};

export default Reset;
