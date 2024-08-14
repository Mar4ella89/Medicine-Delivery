import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import MedicineSearchForm from 'modules/MedicineSearchForm/MedicineSearchForm';

import css from './Navbar.module.css';

const Navbar = () => {
  const [filter, setFilter] = useState('');

  // const changeFilter = event => setFilter(event.currentTarget.value);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={css.navbar}>
      <div className={css.wrapper}>
        <ul className={css.navList}>
          <li>
            <NavLink className={css.navLink} to="/">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navLink} to="/cart">
              Shoping cart
            </NavLink>
          </li>
        </ul>
        <MedicineSearchForm value={filter} />
        {/* <MedicineSearchForm value={filter} onChange={changeFilter} /> */}
      </div>
    </div>
  );
};

export default Navbar;
