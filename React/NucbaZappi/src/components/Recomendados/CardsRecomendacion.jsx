import React from 'react';

import CardRecomendacion from './CardRecomendacion';

import { useSelector } from 'react-redux';
import { CardsContainer } from './CardsRecomendacionStyled';

const CardsRecomendacion = () => {
  const recommended = useSelector(state => state.recommended.recommended);

  return (
    <CardsContainer gridLength={recommended.length}>
      {recommended.map(recomendado => (
        <CardRecomendacion key={recomendado.id} {...recomendado} />
      ))}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
