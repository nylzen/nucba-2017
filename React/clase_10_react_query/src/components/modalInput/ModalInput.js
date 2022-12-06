import React from 'react';
import {
  InputContainerStyled,
  InputLabelStyled,
  InputStyled,
} from './ModalInputStyles';

const ModalInput = ({ type, name, placeholder = '', label, handleChange }) => {
  return (
    <InputContainerStyled full={name === 'img'}>
      <InputLabelStyled htmlFor={name}>{label}</InputLabelStyled>
      {type === 'number' ? (
        <InputStyled
          type={type}
          min='1'
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={e => handleChange(e)}
        />
      ) : (
        <InputStyled
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={e => handleChange(e)}
        />
      )}
    </InputContainerStyled>
  );
};

export default ModalInput;
