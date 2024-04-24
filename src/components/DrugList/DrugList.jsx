import css from './DrugsList.module.css';

const DrugList = ({ drugsItem, onSelectPharmacy }) => {
  console.log(drugsItem);

  const handlePharmacyClick = pharmacyId => {
    onSelectPharmacy(pharmacyId);
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
