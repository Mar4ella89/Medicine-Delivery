import { useContext, useEffect, useState } from 'react';

import Container from 'components/Container/Container';
import MedicineCardList from 'components/MedicineCardList/MedicineCardList';
import DrugList from 'components/DrugList/DrugList';
// import DrugOnMap from 'components/DrugOnMap/DrugOnMap';
import DrugContext from 'contexts/DrugContext';

// import { allDrugs } from 'services/drugsAPI';
import { allMedicines } from 'services/medicinesAPI';

import css from './Shop.module.css';

const Shop = () => {
  const { filteredDrug, selectedPharmacy, setSelectedPharmacy, drugsItem } =
    useContext(DrugContext);

  console.log(filteredDrug);

  // const [drugsItem, setDrugsItem] = useState([]);
  // const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [medicineItems, setMedicineItems] = useState([]);

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

  const filteredMedicines = medicineItems.filter(medicine => {
    const pharmacyIdArr = medicine.availablePharmacies;
    return pharmacyIdArr.includes(selectedPharmacy);
  });

  // const filteredDrug = drugsItem.find(({ _id }) => {
  //   return _id === selectedPharmacy;
  // });

  return (
    <Container>
      {/* <div className={css.mapWrapper}>
        <DrugOnMap currentDrug={filteredDrug(drugsItem)} />
      </div> */}

      <div className={css.wrapper}>
        <DrugList
          drugsItem={drugsItem}
          onSelectPharmacy={pharmacyId => setSelectedPharmacy(pharmacyId)}
        />
        <MedicineCardList
          medicines={selectedPharmacy ? filteredMedicines : medicineItems}
        />
      </div>
    </Container>
  );
};

export default Shop;
