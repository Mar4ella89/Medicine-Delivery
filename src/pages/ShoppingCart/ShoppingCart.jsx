import Container from 'components/Container/Container';
import OrderCardList from 'components/OrderCardList/OrderCardList';
import OrderForm from 'components/OrderForm/OrderForm';

import css from './ShoppingCart.module.css';

const ShoppingCart = () => {
  return (
    <Container>
      <div className={css.wrapper}>
        <OrderForm />
        <OrderCardList />
      </div>
    </Container>
  );
};

export default ShoppingCart;
