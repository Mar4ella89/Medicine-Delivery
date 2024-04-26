import css from './ShoppingCart.module.css';

const ShoppingCart = () => {
  const elements = medicines.map(({ _id, name, imgUrl, price }) => (
    <li key={_id} className={css.itemMedicine}>
      <img src={imgUrl} alt={name} width={290} className={css.img} />
      <h3 className={css.subtitle}>{name}</h3>
      <div className={css.medicineOrder}>
        <p>{price} $</p>
        <button
          className={css.btnOrder}
          onClick={() => handleMedicineClick(_id)}
        >
          add to Cart
        </button>
      </div>
    </li>
  ));

  return (
    <section className={css.sectionMedicine}>
      <ul className={css.listMedicine}>{elements}</ul>
    </section>
  );
};

export default ShoppingCart;
// import { useState } from 'react';

// import css from './MedicineCardList.module.css';

// const MedicineCardList = ({ medicines }) => {
//   const [pickedMedicine, setPickedMedicine] = useState([]);

//   const handleMedicineClick = idMedicines => {
//     const itemMedecine = medicines.filter(({ _id }) => _id === idMedicines);
//     setPickedMedicine(prevState => [...prevState, ...itemMedecine]);
//   };

//   console.log(pickedMedicine);

//   const elements = medicines.map(({ _id, name, imgUrl, price }) => (
//     <li key={_id} className={css.itemMedicine}>
//       <img src={imgUrl} alt={name} width={290} className={css.img} />
//       <h3 className={css.subtitle}>{name}</h3>
//       <div className={css.medicineOrder}>
//         <p>{price} $</p>
//         <button
//           className={css.btnOrder}
//           onClick={() => handleMedicineClick(_id)}
//         >
//           add to Cart
//         </button>
//       </div>
//     </li>
//   ));

//   return (
//     <section className={css.sectionMedicine}>
//       <ul className={css.listMedicine}>{elements}</ul>
//     </section>
//   );
// };

// export default MedicineCardList;
