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
    const existingItem = cartItems.find(({ _id }) => _id === medicineId);
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item._id === existingItem._id
            ? { ...item, quantity: existingItem.quantity + 1 }
            : item
        )
      );
      return;
    }

    setCartItems(prevState => [
      ...prevState,
      { ...medicines.find(({ _id }) => _id === medicineId), quantity: 1 },
    ]);
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
