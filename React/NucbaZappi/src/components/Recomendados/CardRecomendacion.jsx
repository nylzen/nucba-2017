import React from 'react';
import { formatPrice } from '../../utils/index';

import Button from '../UI/Button/Button';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';
import {
  Card,
  CardImg,
  CardPrice,
  CardText,
  CardTitle,
  InfoCard,
} from './CardsRecomendacionStyled';

const CardRecomendacion = ({ title, img, desc, price, id }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <CardImg src={img} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <InfoCard>{desc}</InfoCard>
        <CardPrice>{formatPrice(price)}</CardPrice>
      </CardText>
      <Button
        onClick={() => dispatch(addToCart({ id, img, title, desc, price }))}
      >
        Agregar
      </Button>
    </Card>
  );
};

export default CardRecomendacion;
