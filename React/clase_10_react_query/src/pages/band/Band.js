import React from 'react';
import { useParams } from 'react-router-dom';
import { useBandData } from '../../hooks/useBandData';

import Loader from '../../components/loader/Loader';
import Card from '../../components/card/Card';

import { BandContainerStyled, BandErrorMessageStyled } from './BandStyles';

const Band = () => {
  const { id } = useParams();
  //   console.log(id);
  const { data, isLoading, isError, error } = useBandData(id);

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <BandErrorMessageStyled>{error.message}</BandErrorMessageStyled>
      )}

      {data && (
        <BandContainerStyled>
          <Card {...data.data} />
        </BandContainerStyled>
      )}
    </>
  );
};

export default Band;
