import { useContext } from 'react';

import CartContext from 'contexts/CartContext';

import css from './OrderCardList.module.css';

const OrderCardList = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemoveClick = medicineId => {
    removeFromCart(medicineId);
  };

  const handleQuantityChange = (medicineId, event) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity >= 0) {
      updateQuantity(medicineId, newQuantity);
    }
  };

  const handleQuantityIncrease = (medicineId, quantity) => {
    updateQuantity(medicineId, quantity + 1);
  };

  const handleQuantityDecrease = (medicineId, quantity) => {
    if (quantity > 0) {
      updateQuantity(medicineId, quantity - 1);
    }
  };

  const elements = cartItems.map(
    ({ _id, name, imgUrl, price, quantity, totalPrice }) => (
      <li key={_id + '1'} className={css.itemMedicine}>
        <img src={imgUrl} alt={name} width={290} className={css.img} />
        <h3 className={css.subtitle}>{name}</h3>
        <div className={css.medicineOrder}>
          <p>{totalPrice ? totalPrice : price} $</p>
          <button
            type="button"
            className={css.btnOrder}
            onClick={() => handleRemoveClick(_id)}
          >
            Remove
          </button>
          <div className={css.quantityWrapper}>
            <button onClick={() => handleQuantityDecrease(_id, quantity)}>
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={event => handleQuantityChange(_id, event)}
              min="0"
              max="10"
              required
            />
            <button onClick={() => handleQuantityIncrease(_id, quantity)}>
              +
            </button>
          </div>
        </div>
      </li>
    )
  );

  return (
    <section className={css.sectionMedicine}>
      <ul className={css.listMedicine}>{elements}</ul>
    </section>
  );
};

export default OrderCardList;
