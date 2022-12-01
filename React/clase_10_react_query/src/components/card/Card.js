import React from 'react';

import BandPhoto from '../bandPhoto/BandPhoto';
import BandButton from '../bandButton/BandButton';

import {
  CardContainerStyled,
  CardContentContainerStyled,
  CardDescriptionStyled,
  CardTitleStyled,
  LinkStyled,
} from './CardStyles';
import { useLocation } from 'react-router-dom';
import CardFooter from '../cardFooter/CardFooter';

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

      <BandButton genre={genre} />
      {!pathname.match(/bands/i) && <CardFooter lastSong={lastSong} />}
    </CardContainerStyled>
  );
};

export default Card;
