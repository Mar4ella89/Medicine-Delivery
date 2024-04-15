import { useEffect, useState } from 'react';

import Container from 'components/Container/Container';
import { allMedicines } from 'services/medicinesAPI';

import css from './Shop.module.css';

const Shop = () => {
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

  console.log(medicineItems);

  const elements = medicineItems.map(({ id, name, imgUrl, price }) => (
    <li className={css.itemCart}>
      <img src={imgUrl} alt={name} width={290} className={css.img} />
      <h3 className={css.subtitle}>{name}</h3>
      <div className={css.medicineOrder}>
        <p>{price} $</p>
        <button className={css.btnOrder}>add to Cart</button>
      </div>
    </li>
  ));

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
        <section className={css.sectionMedicine}>
          <ul className={css.listCart}>
            {elements}
            {/* <li className={css.itemCart}>
              <img
                src={medicineItems.imgUrl}
                alt=""
                width={290}
                className={css.img}
              />
              <h3 className={css.subtitle}>medicineItems.name</h3>
              <div className={css.medicineOrder}>
                <p>medicineItems.price</p>
                <button className={css.btnOrder}>add to Cart</button>
              </div>
            </li>
            <li className={css.itemCart}>Medicine 2</li>
            <li className={css.itemCart}>Medicine 3</li>
            <li className={css.itemCart}>Medicine 4</li>
            <li className={css.itemCart}>Medicine 5</li>
            <li className={css.itemCart}>Medicine 6</li>
            <li className={css.itemCart}>Medicine 7</li>
            <li className={css.itemCart}>Medicine 8</li>
            <li className={css.itemCart}>Medicine 9</li>
            <li className={css.itemCart}>Medicine 10</li> */}
          </ul>
        </section>
      </div>
    </Container>
  );
};

export default Shop;
