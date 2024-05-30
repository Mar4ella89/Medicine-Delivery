import { useContext } from 'react';

import CartContext from 'contexts/CartContext';

import css from './OrderCardList.module.css';

const OrderCardList = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  console.log(cartItems);

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
    ({ _id, name, imgUrl, quantity, price, totalPrice }) => (
      <li key={_id + '1'} className={css.itemMedicine}>
        <div className={css.wrapper}>
          <img src={imgUrl} alt={name} width={145} className={css.img} />

          <div className={css.discription}>
            <div>
              <h3 className={css.subtitle}>{name}</h3>
              <p>{price} $</p>
            </div>
            <div className={css.medicineOrder}>
              <div className={css.quantityWrapper}>
                <button onClick={() => handleQuantityDecrease(_id, quantity)}>
                  -
                </button>
                <input
                  className={css.input}
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
          </div>
          <div className={css.action}>
            <button
              type="button"
              className={css.btnOrder}
              onClick={() => handleRemoveClick(_id)}
            >
              Remove
            </button>
            <p>{totalPrice.toFixed(2)} $</p>
          </div>
        </div>
      </li>
    )
  );

  const priceTotal = cartItems.reduce((sum, item) => {
    return sum + item.totalPrice;
  }, 0);

  return (
    <section className={css.sectionMedicine}>
      <ul className={css.listMedicine}>{elements}</ul>
      {cartItems.length ? (
        <p className={css.totalPrice}>
          Total price:
          <span className={css.sum}> {priceTotal.toFixed(2)} $</span>
        </p>
      ) : (
        <p>No order</p>
      )}
    </section>
  );
};

export default OrderCardList;
