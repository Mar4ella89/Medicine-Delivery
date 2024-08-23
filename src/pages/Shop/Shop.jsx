import { useContext, useEffect, useState } from 'react';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import Container from 'components/Container/Container';
import MedicineCardList from 'components/MedicineCardList/MedicineCardList';
import DrugList from 'components/DrugList/DrugList';
import DrugContext from 'contexts/DrugContext';
import CartContext from 'contexts/CartContext';

// import { allMedicines } from 'services/medicinesAPI';
import 'react-toastify/dist/ReactToastify.css';
import css from './Shop.module.css';

const Shop = () => {
  const { selectedPharmacy, setSelectedPharmacy, drugsItem } =
    useContext(DrugContext);

  const { medicineItems, filter, getVisibleMedicines, visibleMedicines } =
    useContext(CartContext);

  // const [medicineItems, setMedicineItems] = useState([]);
  // getVisibleMedicines();
  // useEffect(() => {
  //   getVisibleMedicines();
  // }, []);

  // const getVisibleMedicines = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return medicineItems.filter(({ name }) => {
  //     return name.toLowerCase().includes(normalizedFilter);
  //   });
  // };

  // const visibleMedicines = getVisibleMedicines();
  console.log(medicineItems);
  console.log(visibleMedicines);

  const filteredMedicines = visibleMedicines.filter(medicine => {
    const pharmacyIdArr = medicine.availablePharmacies;
    return pharmacyIdArr.includes(selectedPharmacy);
  });

  // const [filter, setFilter] = useState('');

  // const changeFilter = event => setFilter(event.currentTarget.value);

  return (
    <Container>
      <div className={css.wrapper}>
        <DrugList
          drugsItem={drugsItem}
          onSelectPharmacy={pharmacyId => setSelectedPharmacy(pharmacyId)}
        />
        {/* <MedicineCardList
          medicines={selectedPharmacy ? filteredMedicines : medicineItems}
        /> */}
        <MedicineCardList
          medicines={selectedPharmacy ? filteredMedicines : visibleMedicines}
        />
      </div>
      <ToastContainer autoClose={3000} position="bottom-right" />
    </Container>
  );
};

export default Shop;
