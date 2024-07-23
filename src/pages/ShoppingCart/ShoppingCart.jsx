import Container from 'components/Container/Container';
import OrderCardList from 'components/OrderCardList/OrderCardList';
import OrderDrugForm from 'components/OrderDrugForm/OrderDrugForm';

import css from './ShoppingCart.module.css';

const ShoppingCart = () => {
  return (
    <Container>
      <div className={css.wrapper}>
        <OrderDrugForm />
        <OrderCardList />
      </div>
    </Container>
  );
};

export default ShoppingCart;
