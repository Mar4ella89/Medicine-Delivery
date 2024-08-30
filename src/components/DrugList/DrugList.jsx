import { useState } from 'react';

import css from './DrugsList.module.css';

const DrugList = ({ drugsItem, onSelectPharmacy }) => {
  const [selectedPharmacyId, setSelectedPharmacyId] = useState(null);

  const handlePharmacyClick = pharmacyId => {
    onSelectPharmacy(pharmacyId);
    setSelectedPharmacyId(pharmacyId);
  };

  const handleAllClick = () => {
    onSelectPharmacy('');
    setSelectedPharmacyId('');
  };

  const elements = drugsItem.map(({ _id, name }) => {
    return (
      <li
        key={_id}
        className={`${css.item} ${
          selectedPharmacyId === _id ? css.selected : ''
        }`}
        onClick={() => handlePharmacyClick(_id)}
      >
        {name}
      </li>
    );
  });

  return (
    <section className={css.sectionDrug}>
      <p
        className={`${css.item} ${
          selectedPharmacyId === '' ? css.selected : ''
        }`}
        onClick={() => handleAllClick()}
      >
        All drugs
      </p>
      <h2 className={css.title}>drugstore:</h2>
      <ul>{elements}</ul>
    </section>
  );
};

export default DrugList;
