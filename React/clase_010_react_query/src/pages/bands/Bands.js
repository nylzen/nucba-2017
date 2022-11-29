import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

import Card from '../../components/card/Card';
import Loader from '../../components/loader/Loader';

import { BandsContainerStyled, BandsErrorMessageStyled } from './BandsStyles';

const fetchBands = () => {
  return axios.get('http://localhost:3006/bandas');
};

const Bands = () => {
  const { isLoading, data, isError, error } = useQuery('bands', fetchBands, {
    staleTime: 3000,
    cacheTime: 5000,
  });

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <BandsErrorMessageStyled>{error.message}</BandsErrorMessageStyled>
      )}

      {data && (
        <BandsContainerStyled>
          {data.data.map(band => (
            <Card key={band.id} {...band} />
          ))}
        </BandsContainerStyled>
      )}
    </>
  );
};

export default Bands;
