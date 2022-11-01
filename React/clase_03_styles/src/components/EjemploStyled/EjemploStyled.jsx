import React from 'react';
import {
  StyledButton,
  StyledContainer,
  StyledH4,
  StyledP,
} from './EjemploStyledStyles';

const EjemploStyled = () => {
  return (
    <StyledContainer>
      <StyledH4>Soy un h4 esteilado con styled-components</StyledH4>
      <StyledP>Soy un p estilado con styled-components</StyledP>
      <h3>Holis</h3>
      <StyledButton>Soy un boton</StyledButton>
      <StyledButton color pepito>
        Soy un boton con props
      </StyledButton>
    </StyledContainer>
  );
};

export default EjemploStyled;
