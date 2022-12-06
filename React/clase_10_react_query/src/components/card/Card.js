import React from 'react';

import BandButton from '../bandButton/BandButton';
import BandPhoto from '../bandPhoto/BandPhoto';

import { useLocation } from 'react-router-dom';
import CardFooter from '../cardFooter/CardFooter';
import {
  ButtonsContainerStyled,
  CardContainerStyled,
  CardContentContainerStyled,
  CardDescriptionStyled,
  CardTitleStyled,
  LinkStyled,
} from './CardStyles';

const Card = props => {
  const { pathname } = useLocation();

  const { name, img, listeners, genre, id, lastSong } = props;
  return (
    <CardContainerStyled>
      <BandPhoto img={img} alt={name} />

      <CardContentContainerStyled>
        {pathname.match(/bands/i) ? (
          <LinkStyled to={`/band/${id}`}>
            <CardTitleStyled>{name}</CardTitleStyled>
          </LinkStyled>
        ) : (
          <CardTitleStyled>{name}</CardTitleStyled>
        )}

        <CardDescriptionStyled>
          {listeners} oyentes mensuales
        </CardDescriptionStyled>
      </CardContentContainerStyled>

      <ButtonsContainerStyled>
        <BandButton genre={genre} />
        <BandButton id={id} deleteButton />
      </ButtonsContainerStyled>
      {!pathname.match(/bands/i) && <CardFooter lastSong={lastSong} />}
    </CardContainerStyled>
  );
};

export default Card;
