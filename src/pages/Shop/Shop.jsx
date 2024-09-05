import { useContext, useState, useMemo } from 'react';

import { ToastContainer } from 'react-toastify';

import Container from 'components/Container/Container';
import MedicineCardList from 'components/MedicineCardList/MedicineCardList';
import DrugList from 'components/DrugList/DrugList';
import DrugContext from 'contexts/DrugContext';
import CartContext from 'contexts/CartContext';
import SortingControls from 'components/SortingControls/SortingControls';

import 'react-toastify/dist/ReactToastify.css';
import css from './Shop.module.css';

const Shop = () => {
  const { selectedPharmacy, setSelectedPharmacy, drugsItem } =
    useContext(DrugContext);

  const { visibleMedicines, favorites } = useContext(CartContext);

  const filteredMedicines = visibleMedicines.filter(medicine => {
    const pharmacyIdArr = medicine.availablePharmacies;
    return pharmacyIdArr.includes(selectedPharmacy);
  });

  const medicinesList = selectedPharmacy ? filteredMedicines : visibleMedicines;

  const [sortOrder, setSortOrder] = useState('default');

  console.log(medicinesList);
  console.log(favorites);
  console.log([...medicinesList].filter(({ _id }) => favorites.includes(_id)));

  const sortedMedicines = useMemo(() => {
    if (sortOrder === 'default') return medicinesList;
    if (sortOrder === 'favorite')
      return [...medicinesList].filter(({ _id }) => favorites.includes(_id));
    if (sortOrder === 'cheapToExpensive')
      return [...medicinesList].sort((a, b) => a.price - b.price);
    if (sortOrder === 'expensiveToCheap')
      return [...medicinesList].sort((a, b) => b.price - a.price);
    if (sortOrder === 'nameAZ')
      return [...medicinesList].sort((a, b) => a.name.localeCompare(b.name));
    return medicinesList;
  }, [medicinesList, sortOrder, favorites]);

  const handleSortFromCheap = () => {
    setSortOrder('cheapToExpensive');
  };

  const handleSortFromExpensive = () => {
    setSortOrder('expensiveToCheap');
  };

  const handleSortByName = () => {
    setSortOrder('nameAZ');
  };

  const handleSortByFavorite = () => {
    setSortOrder('favorite');
  };

  return (
    <Container>
      <SortingControls
        onFilterByFavorite={handleSortByFavorite}
        onSortFromCheap={handleSortFromCheap}
        onSortFromExpensive={handleSortFromExpensive}
        onSortByName={handleSortByName}
      />
      <div className={css.wrapper}>
        <DrugList
          drugsItem={drugsItem}
          onSelectPharmacy={pharmacyId => setSelectedPharmacy(pharmacyId)}
        />

        <MedicineCardList medicines={sortedMedicines} />
      </div>
      <ToastContainer autoClose={3000} position="bottom-right" />
    </Container>
  );
};

export default Shop;
