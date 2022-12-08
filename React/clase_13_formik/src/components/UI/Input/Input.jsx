import { ErrorMessage, Field } from 'formik';
import React from 'react';
import {
  ErrorStyled,
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
} from './InputStyles';

const Input = ({ name, label, type, isError, ...field }) => {
  return (
    // <InputBoxStyled>
    //   <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
    //   <InputStyled type={type} id={label} error={isError} {...field} />

    //   {isError && <ErrorStyled>{isError}</ErrorStyled>}
    // </InputBoxStyled>

    // Formik
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <Field
        name={name}
        type={type}
        as={InputStyled}
        id={label}
        error={isError}
      />
      <ErrorMessage name={name} component={ErrorStyled} />
    </InputBoxStyled>
  );
};

export default Input;
