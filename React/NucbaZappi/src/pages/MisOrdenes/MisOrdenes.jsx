import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CardsMisOrdenes from '../../components/MisOrdenes/CardsMisOrdenes';
import Button from '../../components/UI/Button/Button';

import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../axios/axios-orders';
import { clearError, fetchOrdersFail } from '../../redux/orders/ordersSlice';
import {
  MisOrdenesBtnContainerStyled,
  MisOrdenesContainerStyled,
  MisOrdenesPatternStyled,
  MisOrdenesTitleStyled,
} from './MisOrdenesStyles';

const MisOrdenes = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.user.currentUser);
  const { orders, error } = useSelector(state => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser);
    }

    if (!currentUser?.token) {
      dispatch(
        fetchOrdersFail(
          'Upss, algo salio mal. No hay ordenes sin usuario. Es como querer jugar al futbol sin pelota.'
        )
      );
    } else {
      error && dispatch(clearError());
    }
  }, [dispatch, currentUser?.token, orders, error]);

  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>Mis órdenes</MisOrdenesTitleStyled>
        <CardsMisOrdenes />
        <MisOrdenesBtnContainerStyled>
          <Button onClick={() => navigate('/')}>Volver a comprar</Button>
        </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>
      <MisOrdenesPatternStyled
        src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648434/coding/NucbaZappi/Assets/Pattern_lt5uru.png'
        alt=''
      />
    </>
  );
};

export default MisOrdenes;
