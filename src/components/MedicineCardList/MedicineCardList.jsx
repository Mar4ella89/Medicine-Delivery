import css from './MedicineCardList.module.css';

const MedicineCardList = ({ medicines }) => {
  const elements = medicines.map(({ _id, name, imgUrl, price }) => (
    <li key={_id} className={css.itemMedicine}>
      <img src={imgUrl} alt={name} width={290} className={css.img} />
      <h3 className={css.subtitle}>{name}</h3>
      <div className={css.medicineOrder}>
        <p>{price} $</p>
        <button className={css.btnOrder}>add to Cart</button>
      </div>
    </li>
  ));

  return (
    <section className={css.sectionMedicine}>
      <ul className={css.listMedicine}>{elements}</ul>
    </section>
  );
};

export default MedicineCardList;
