import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';
import { INITIAL_LIMIT } from '../../utils';
import Button from '../UI/Button/Button';
import CardProducto from './CardProducto';
import { ProductosContainer } from './CardsProductosStyles';

const CardsProductos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);
  // console.log(limit);
  let products = useSelector(state => state.products.products);

  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );

  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] };
  }

  const totalProducts = useSelector(state => state.products.totalProducts);

  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

  return (
    <>
      <ProductosContainer>
        {Object.entries(products).map(([, foods]) =>
          foods.map(food => {
            if (limit >= food.id || selectedCategory) {
              return <CardProducto key={food.id} {...food} />;
            }
            return null;
          })
        )}
      </ProductosContainer>
      {!selectedCategory && (
        <ButtonContainerStyled>
          <Button
            onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
            secondary='true'
            disabled={INITIAL_LIMIT === limit}
          >
            <span>Ver menos</span>
          </Button>
          <Button
            onClick={() => setLimit(prevLimit => prevLimit + INITIAL_LIMIT)}
            disabled={totalProducts <= limit}
          >
            Ver más
          </Button>
        </ButtonContainerStyled>
      )}
    </>
  );
};

export default CardsProductos;
