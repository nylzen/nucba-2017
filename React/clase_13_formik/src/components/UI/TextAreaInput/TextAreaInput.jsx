import React from 'react';
import { InputBoxStyled, InputLabelStyled } from '../Input/InputStyles';
import { ErrorStyled, TextArea } from './TextAreaInputStyles';

const TextAreaInput = ({ label, isError, ...field }) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <TextArea id={label} {...field} error={isError} />
      {isError && <ErrorStyled>{isError}</ErrorStyled>}
    </InputBoxStyled>
  );
};

export default TextAreaInput;
