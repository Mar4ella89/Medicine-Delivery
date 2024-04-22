import { useEffect, useState } from 'react';

import { allDrugs } from 'services/drugsAPI';

import css from './DrugsList.module.css';

const DrugList = ({ drugsItem, onSelectPharmacy }) => {
  // const [drugsItem, setDrugsItem] = useState([]);

  // useEffect(() => {
  //   const fetchAllDrugs = async () => {
  //     try {
  //       const data = await allDrugs();
  //       setDrugsItem(data);
  //     } catch ({ response }) {
  //       console.log(response.data.message);
  //     }
  //   };
  //   fetchAllDrugs();
  // }, []);

  console.log(drugsItem);

  const handlePharmacyClick = pharmacyId => {
    onSelectPharmacy(pharmacyId); // Обновите выбранную аптеку при клике
  };

  const elements = drugsItem.map(({ _id, name, latitude, longitude }) => {
    return (
      <li
        key={_id}
        className={css.item}
        onClick={() => handlePharmacyClick(_id)}
      >
        {name}
      </li>
    );
  });

  return (
    <section className={css.sectionDrug}>
      <h1 className={css.title}>drugstore:</h1>
      <ul>{elements}</ul>
    </section>
  );
};

export default DrugList;
