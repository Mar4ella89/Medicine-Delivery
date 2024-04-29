import Container from 'components/Container/Container';
import OrderCardList from 'components/OrderCardList/OrderCardList';
import OrderForm from 'components/OrderForm/OrderForm';

// import css from './ShoppingCart.module.css';

const ShoppingCart = () => {
  return (
    <Container>
      <OrderForm />
      <OrderCardList />
    </Container>
  );
};

export default ShoppingCart;
