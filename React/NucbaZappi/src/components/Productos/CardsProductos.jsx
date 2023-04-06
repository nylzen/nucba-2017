import { Products } from '../../data/Products';
import Button from '../UI/Button/Button';
import CardProducto from './CardProducto';

import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';
import { ProductosContainer } from './CardsProductosStyles';

const CardsProductos = () => {
  return (
    <>
      <ProductosContainer>
        {Object.entries(Products).map(([, foods]) =>
          foods.map(food => <CardProducto key={food.id} {...food} />)
        )}
      </ProductosContainer>

      <ButtonContainerStyled>
        <Button
          onClick={e => e.preventDefault()}
          secondary='true'
          disabled='true'
        >
          <span>Ver menos</span>
        </Button>
        <Button onClick={e => e.preventDefault()} disabled='true'>
          Ver más
        </Button>
      </ButtonContainerStyled>
    </>
  );
};

export default CardsProductos;
