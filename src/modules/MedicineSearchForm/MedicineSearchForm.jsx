import { useContext } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';

import CartContext from 'contexts/CartContext';

import css from './MedicineSearchForm.module.css';

const MedicineSearchForm = () => {
  const { getVisibleMedicines, filter, changeFilter } = useContext(CartContext);

  const handleSubmit = event => {
    event.preventDefault();

    if (filter.trim() === '') {
      toast.warn('Please enter a search term in the search box');
    }

    getVisibleMedicines();
  };

  return (
    <div className={css.SearcWrapper}>
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <ImSearch
              style={{
                marginTop: 4,
              }}
            />
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            name="searchQuery"
            value={filter}
            onChange={changeFilter}
            autoComplete="off"
            autoFocus
            placeholder="Search medicines"
          />
        </form>
      </header>
    </div>
  );
};

export default MedicineSearchForm;
