import { useContext } from 'react';

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

  const { visibleMedicines } = useContext(CartContext);

  const filteredMedicines = visibleMedicines.filter(medicine => {
    const pharmacyIdArr = medicine.availablePharmacies;
    return pharmacyIdArr.includes(selectedPharmacy);
  });

  return (
    <Container>
      <div>
        Sorting:
        <span>Favorites</span>
        <span>From cheap to expensive</span>
        <span>From expensive to cheap</span>
        <span>Sort by Name (A to Z)</span>
      </div>
      <div className={css.wrapper}>
        <DrugList
          drugsItem={drugsItem}
          onSelectPharmacy={pharmacyId => setSelectedPharmacy(pharmacyId)}
        />

        <MedicineCardList
          medicines={selectedPharmacy ? filteredMedicines : visibleMedicines}
        />
      </div>
      <ToastContainer autoClose={3000} position="bottom-right" />
    </Container>
  );
};

export default Shop;
