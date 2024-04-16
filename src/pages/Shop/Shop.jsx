// import { useEffect, useState } from 'react';

import Container from 'components/Container/Container';
import MedicineCardList from 'components/MedicineCardList/MedicineCardList';

import css from './Shop.module.css';

const Shop = () => {
  return (
    <Container>
      <div className={css.wrapper}>
        <section className={css.sectionDrug}>
          <h1 className={css.title}>drugstore:</h1>
          <ul>
            <li className={css.item}>Drug 1</li>
            <li className={css.item}>Drug 2</li>
            <li className={css.item}>Drug 3</li>
            <li className={css.item}>Drug 4</li>
            <li className={css.item}>Drug 5</li>
          </ul>
        </section>
        <MedicineCardList />
      </div>
    </Container>
  );
};

export default Shop;
