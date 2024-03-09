import { NavLink } from 'react-router-dom';

import css from './Navbar.module.css';

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
