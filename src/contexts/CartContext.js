import React, { createContext, useState, useEffect, useCallback } from 'react';

import { allMedicines } from 'services/medicinesAPI';

const CartContext = createContext({
  filter: null,
  changeFilter: () => {},
  getVisibleMedicines: () => {},
  visibleMedicines: [],
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
});

export const CartProvider = ({ children }) => {
  const [medicineItems, setMedicineItems] = useState([]);

  useEffect(() => {
    const fetchAllMedicines = async () => {
      try {
        const data = await allMedicines();
        setMedicineItems(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchAllMedicines();
  }, []);

  const [cartItems, setCartItems] = useState(
    () => JSON.parse(window.localStorage.getItem('medicines')) ?? []
  );

  useEffect(() => {
    window.localStorage.setItem('medicines', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (medicines, medicineId) => {
    const existingItem = cartItems.find(({ _id }) => _id === medicineId);

    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item._id === existingItem._id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.totalPrice + item.price,
              }
            : item
        )
      );
      return;
    }

    const newMedicine = medicines.find(({ _id }) => _id === medicineId);
    setCartItems(prevState => [
      ...prevState,
      { ...newMedicine, quantity: 1, totalPrice: newMedicine.price },
    ]);
  };

  const removeFromCart = medicineId => {
    setCartItems(cartItems.filter(({ _id }) => medicineId !== _id));
  };

  const updateQuantity = (medicineId, newQuantity) => {
    setCartItems(
      cartItems.map(item => {
        return item._id === medicineId
          ? {
              ...item,
              quantity: newQuantity,
              totalPrice: item.price * newQuantity,
            }
          : item;
      })
    );
  };

  const [filter, setFilter] = useState('');
  const [visibleMedicines, setVisibleMedicines] = useState(medicineItems);

  const changeFilter = event => setFilter(event.currentTarget.value);

  const getVisibleMedicines = useCallback(
    (searchFilter = filter) => {
      const normalizedFilter = searchFilter.toLowerCase();

      if (normalizedFilter === '') {
        setVisibleMedicines(medicineItems);
        return;
      }

      setVisibleMedicines(
        medicineItems.filter(({ name }) => {
          return name.toLowerCase().includes(normalizedFilter);
        })
      );
    },
    [filter, medicineItems]
  );

  useEffect(() => {
    getVisibleMedicines('');
  }, [getVisibleMedicines]);

  return (
    <CartContext.Provider
      value={{
        filter,
        changeFilter,
        getVisibleMedicines,
        visibleMedicines,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
