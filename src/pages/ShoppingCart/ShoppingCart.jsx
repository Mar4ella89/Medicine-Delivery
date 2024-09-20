import { ToastContainer } from 'react-toastify';

import Container from 'components/Container/Container';
import OrderCardList from 'components/OrderCardList/OrderCardList';
import OrderDrugForm from 'components/OrderDrugForm/OrderDrugForm';

import 'react-toastify/dist/ReactToastify.css';
import css from './ShoppingCart.module.css';

const ShoppingCart = () => {
  return (
    <Container>
      <div className={css.wrapper}>
        <OrderDrugForm />
        <OrderCardList />
      </div>
      <ToastContainer autoClose={3000} position="bottom-right" />
    </Container>
  );
};

export default ShoppingCart;
