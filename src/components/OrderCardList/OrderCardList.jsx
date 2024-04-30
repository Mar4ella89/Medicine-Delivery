import { useContext, useEffect, useState } from 'react';

import CartContext from 'contexts/CartContext';

import css from './OrderCardList.module.css';

const OrderCardList = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [currentQuantity, setCurrentQuantity] = useState(0);

  // useEffect(() => {
  //   const currentItem = cartItems.find(({ _id }) => _id === medicineId);
  //   if (currentItem) {
  //     setCurrentQuantity(currentItem.quantity);
  //   } else {
  //     setCurrentQuantity(0);
  //   }
  // }, [cartItems, medicineId]);

  const handleRemoveClick = medicineId => {
    removeFromCart(medicineId);
  };

  const handleQuantityChange = (medicineId, event) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity >= 0) {
      updateQuantity(medicineId, newQuantity);
    } else {
      removeFromCart(medicineId);
    }
  };

  const handleQuantityIncrease = medicineId => {
    updateQuantity(medicineId, currentQuantity + 1);
  };

  const handleQuantityDecrease = medicineId => {
    if (currentQuantity > 1) {
      updateQuantity(medicineId, currentQuantity - 1);
    } else {
      removeFromCart(medicineId);
    }
  };

  const elements = cartItems.map(({ _id, name, imgUrl, price, quantity }) => (
    <li key={_id + '1'} className={css.itemMedicine}>
      <img src={imgUrl} alt={name} width={290} className={css.img} />
      <h3 className={css.subtitle}>{name}</h3>
      <div className={css.medicineOrder}>
        <p>{price} $</p>
        <button
          type="button"
          className={css.btnOrder}
          onClick={() => handleRemoveClick(_id)}
        >
          Remove
        </button>
        <div className={css.quantityWrapper}>
          <button onClick={handleQuantityIncrease}>+</button>
          <input
            type="number"
            value={quantity}
            onChange={event => handleQuantityChange(_id, event)}
            min="1"
            max="10"
          />
          <button onClick={handleQuantityDecrease}>-</button>
        </div>
      </div>
    </li>
  ));

  return (
    <section className={css.sectionMedicine}>
      <ul className={css.listMedicine}>{elements}</ul>
    </section>
  );
};

export default OrderCardList;
