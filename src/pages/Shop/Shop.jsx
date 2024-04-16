// import { useEffect, useState } from 'react';

import Container from 'components/Container/Container';
import MedicineCardList from 'components/MedicineCardList/MedicineCardList';
import DrugList from 'components/DrugList/DrugList';

import css from './Shop.module.css';

const Shop = () => {
  return (
    <Container>
      <div className={css.wrapper}>
        <DrugList />
        <MedicineCardList />
      </div>
    </Container>
  );
};

export default Shop;
