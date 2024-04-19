import { useEffect, useState } from 'react';

import Container from 'components/Container/Container';
import MedicineCardList from 'components/MedicineCardList/MedicineCardList';
import DrugList from 'components/DrugList/DrugList';

import { allDrugs } from 'services/drugsAPI';
import { allMedicines } from 'services/medicinesAPI';

import css from './Shop.module.css';

const Shop = () => {
  const [drugsItem, setDrugsItem] = useState([]);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null); // Новая переменная состояния
  const [medicineItems, setMedicineItems] = useState([]);

  useEffect(() => {
    const fetchAllDrugs = async () => {
      try {
        const data = await allDrugs();
        setDrugsItem(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchAllDrugs();
  }, []);

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

  return (
    <Container>
      <div className={css.wrapper}>
        {/* <DrugList />
        <MedicineCardList /> */}
        {/* <DrugList
          onSelectPharmacy={pharmacyId => setSelectedPharmacy(pharmacyId)}
        />
        <MedicineCardList
          medicineItems={medicineItems}
          selectedPharmacy={selectedPharmacy}
        /> */}
        <DrugList
          drugsItem={drugsItem}
          onSelectPharmacy={pharmacyId => setSelectedPharmacy(pharmacyId)}
        />
        <MedicineCardList
          medicineItems={medicineItems}
          selectedPharmacy={selectedPharmacy}
        />
      </div>
    </Container>
  );
};

export default Shop;
