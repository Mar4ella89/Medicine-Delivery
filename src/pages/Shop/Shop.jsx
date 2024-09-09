import {
  useContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from 'react';

import { ToastContainer } from 'react-toastify';

import Container from 'components/Container/Container';
import MedicineCardList from 'components/MedicineCardList/MedicineCardList';
import DrugList from 'components/DrugList/DrugList';
import DrugContext from 'contexts/DrugContext';
import CartContext from 'contexts/CartContext';
import SortingControls from 'components/SortingControls/SortingControls';
import PaginatedItems from 'modules/PaginatedItems/PaginatedItems';

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
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  const sortMedicines = useCallback(
    (medicines, order) => {
      if (order === 'default') return medicines;
      if (order === 'favorite')
        return [...medicines].sort((a, b) => {
          if (favorites.includes(a._id) && !favorites.includes(b._id))
            return -1;
          if (!favorites.includes(a._id) && favorites.includes(b._id)) return 1;
          return 0;
        });

      if (order === 'cheapToExpensive')
        return [...medicines].sort((a, b) => a.price - b.price);
      if (order === 'expensiveToCheap')
        return [...medicines].sort((a, b) => b.price - a.price);
      if (order === 'nameAZ')
        return [...medicines].sort((a, b) => a.name.localeCompare(b.name));
      return medicines;
    },
    [favorites]
  );

  const sortedMedicines = useMemo(() => {
    return sortMedicines(medicinesList, sortOrder);
  }, [medicinesList, sortOrder, sortMedicines]);

  const handleSortFromCheap = useCallback(() => {
    setSortOrder('cheapToExpensive');
  }, []);

  const handleSortFromExpensive = useCallback(() => {
    setSortOrder('expensiveToCheap');
  }, []);

  const handleSortByName = useCallback(() => {
    setSortOrder('nameAZ');
  }, []);

  const handleSortByFavorite = useCallback(() => {
    setSortOrder('favorite');
  }, []);

  useEffect(() => {
    setSortOrder('default');
  }, [selectedPharmacy]);

  const handlePageChange = useCallback(event => {
    setCurrentPage(event.selected);
  }, []);

  const paginatedMedicines = useMemo(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedMedicines.slice(startIndex, endIndex);
  }, [sortedMedicines, currentPage, itemsPerPage]);

  const medicinesContainerRef = useRef(null);

  useEffect(() => {
    if (medicinesContainerRef.current) {
      medicinesContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  return (
    <Container>
      <div>
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
          <div className={css.wrapperMed} ref={medicinesContainerRef}>
            <MedicineCardList medicines={paginatedMedicines} />
            <PaginatedItems
              itemsPerPage={itemsPerPage}
              pageCount={Math.ceil(sortedMedicines.length / itemsPerPage)}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} position="bottom-right" />
    </Container>
  );
};

export default Shop;
