import React, { createContext, useState } from 'react';

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (medicines, idMedicines) => {
    const itemMedecine = medicines.filter(({ _id }) => _id === idMedicines);
    setCartItems(prevState => [...prevState, ...itemMedecine]);
  };

  const removeFromCart = medicineId => {};

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
