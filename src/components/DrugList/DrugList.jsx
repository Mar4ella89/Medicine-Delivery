import { useState } from 'react';

import css from './DrugsList.module.css';

const DrugList = ({ drugsItem, onSelectPharmacy }) => {
  const [selectedPharmacyId, setSelectedPharmacyId] = useState(null);

  const handlePharmacyClick = pharmacyId => {
    onSelectPharmacy(pharmacyId);
    setSelectedPharmacyId(pharmacyId);
  };

  const elements = drugsItem.map(({ _id, name }) => {
    return (
      <li
        key={_id}
        className={css.item + ' ' + css.selected}
        // className={`${css.item} ${css.selected}`}
        // className={`${css.item} ${
        //   selectedPharmacyId === _id ? css.selected : ''
        // }`}
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
