import { useEffect, useContext } from 'react';

import { ToastContainer } from 'react-toastify';

import Container from 'components/Container/Container';
import MedicineCardList from 'components/MedicineCardList/MedicineCardList';
import DrugList from 'components/DrugList/DrugList';
import DrugContext from 'contexts/DrugContext';
import CartContext from 'contexts/CartContext';

import 'react-toastify/dist/ReactToastify.css';
import css from './Shop.module.css';

const Shop = () => {
  const { selectedPharmacy, setSelectedPharmacy, drugsItem } =
    useContext(DrugContext);

  const { getVisibleMedicines, visibleMedicines } = useContext(CartContext);
  // getVisibleMedicines();

  // useEffect(() => {
  //   // Фильтрация при изменении medicineItems
  //   getVisibleMedicines(medicineItems);
  // }, [medicineItems]);

  // const visible = getVisibleMedicines();
  console.dir(visibleMedicines);
  const filteredMedicines = visibleMedicines.filter(medicine => {
    // const filteredMedicines = visibleMedicines.filter(medicine => {
    const pharmacyIdArr = medicine.availablePharmacies;
    return pharmacyIdArr.includes(selectedPharmacy);
  });

  return (
    <Container>
      <div className={css.wrapper}>
        <DrugList
          drugsItem={drugsItem}
          onSelectPharmacy={pharmacyId => setSelectedPharmacy(pharmacyId)}
        />
        <MedicineCardList
          // medicines={selectedPharmacy ? filteredMedicines : visibleMedicines}
          medicines={selectedPharmacy ? filteredMedicines : visibleMedicines}
        />
      </div>
      <ToastContainer autoClose={3000} position="bottom-right" />
    </Container>
  );
};

export default Shop;
