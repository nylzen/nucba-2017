import React from 'react';
import { useBandsData } from '../../hooks/useBandsData';

import Card from '../../components/card/Card';
import Loader from '../../components/loader/Loader';

import FormModal from '../../components/modal/FormModal';
import {
  BandsContainerStyled,
  // BandsDisabledMessageStyled,
  BandsErrorMessageStyled,
} from './BandsStyles';
// import { Box, Button } from '@mui/material';

const Bands = () => {
  const { data, isLoading, isError, error } = useBandsData();
  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <BandsErrorMessageStyled>{error.message}</BandsErrorMessageStyled>
      )}

      {/* {isIdle && (
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <BandsDisabledMessageStyled>
            Consulta Deshabilitada
          </BandsDisabledMessageStyled>
          <Button
            sx={{ backgroundColor: '#4c1d95' }}
            variant='contained'
            onClick={refetch}
          >
            Activar
          </Button>
        </Box>
      )} */}

      {data && (
        <BandsContainerStyled>
          {data.data.map(band => (
            <Card key={band.id} {...band} />
          ))}
          <FormModal />
        </BandsContainerStyled>
      )}
    </>
  );
};

export default Bands;
