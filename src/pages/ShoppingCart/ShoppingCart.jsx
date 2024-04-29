import { useContext } from 'react';

import Container from 'components/Container/Container';
import CartContext from 'contexts/CartContext';

import css from './ShoppingCart.module.css';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveClick = medicineId => {
    removeFromCart(medicineId);
  };

  const elements = cartItems.map(({ _id, name, imgUrl, price }) => (
    <li key={_id + '1'} className={css.itemMedicine}>
      <img src={imgUrl} alt={name} width={290} className={css.img} />
      <h3 className={css.subtitle}>{name}</h3>
      <div className={css.medicineOrder}>
        <p>{price} $</p>
        <button className={css.btnOrder} onClick={() => handleRemoveClick(_id)}>
          Remove
        </button>
      </div>
    </li>
  ));

  return (
    <Container>
      <section className={css.sectionMedicine}>
        <ul className={css.listMedicine}>{elements}</ul>
      </section>
    </Container>
  );
};

export default ShoppingCart;
