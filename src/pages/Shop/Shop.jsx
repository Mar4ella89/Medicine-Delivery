import Container from 'components/Container/Container';

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
      <section className={css.sectionMedicine}>
      <ul className={css.listCart}>
        <li className={css.itemCart}>
            <img src="../public/logo512.png" alt="" width={290} className={css.img}/>
            <h3 className={css.subtitle}>Medicine 1</h3>
            <div className={css.medicineOrder}>
            <p>100$</p>
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
        <li className={css.itemCart}>Medicine 10</li>
        </ul>
        
      </section>
    </div>
    </Container>
  );
};

export default Shop;
