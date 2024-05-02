import React, { createContext, useState } from 'react';

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (medicines, medicineId) => {
    const itemMedicine = medicines.find(({ _id }) => _id === medicineId);
    if (itemMedicine) {
      setCartItems(prevState => [
        ...prevState,
        { ...itemMedicine, quantity: 1, isChecked: true },
      ]);
    }
  };

  const removeFromCart = medicineId => {
    setCartItems(cartItems.filter(({ _id }) => medicineId !== _id));
  };

  const updateQuantity = (medicineId, newQuantity) => {
    setCartItems(
      cartItems.map(item =>
        item._id === medicineId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
