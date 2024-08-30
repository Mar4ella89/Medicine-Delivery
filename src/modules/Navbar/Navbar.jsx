import { NavLink } from 'react-router-dom';

import MedicineSearchForm from 'modules/MedicineSearchForm/MedicineSearchForm';

import css from './Navbar.module.css';

const Navbar = () => {
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
        <MedicineSearchForm />
      </div>
    </div>
  );
};

export default Navbar;
