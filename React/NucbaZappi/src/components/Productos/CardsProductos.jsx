import { useSelector } from 'react-redux';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';
import Button from '../UI/Button/Button';
import CardProducto from './CardProducto';
import { ProductosContainer } from './CardsProductosStyles';

const CardsProductos = () => {
  let products = useSelector(state => state.products.products);
  return (
    <>
      <ProductosContainer>
        {Object.entries(products).map(([, foods]) =>
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
