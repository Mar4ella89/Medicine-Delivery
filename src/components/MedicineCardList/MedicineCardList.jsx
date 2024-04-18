import { useEffect, useState } from 'react';

import { allMedicines } from 'services/medicinesAPI';

import css from './MedicineCardList.module.css';

const MedicineCardList = () => {
  const [medicineItems, setMedicineItems] = useState([]);
  const [selectedDrug, setSelectedDrugs] = useState(null);

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

  const handleDrugChange = drugId => {
    setSelectedDrud(drugId);
  };

  const filteredMedicines = medicines.filter(medicine => {
    // Здесь нужно реализовать логику фильтрации по аптеке
    // (например, по ID или названию)
    return true; // Временный заполнитель
  });

  const elements = medicineItems.map(({ _id, name, imgUrl, price }) => (
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
