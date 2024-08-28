import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import MedicineSearchForm from 'modules/MedicineSearchForm/MedicineSearchForm';
import CartContext from 'contexts/CartContext';

import css from './Navbar.module.css';

const Navbar = () => {
  const { filter, changeFilter } = useContext(CartContext);

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

        <MedicineSearchForm value={filter} onChange={changeFilter} />
      </div>
    </div>
  );
};

export default Navbar;
