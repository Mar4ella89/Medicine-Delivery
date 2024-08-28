import { useContext } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

import CartContext from 'contexts/CartContext';

import css from './MedicineSearchForm.module.css';

const MedicineSearchForm = ({ value, onChange }) => {
  const { getVisibleMedicines } = useContext(CartContext);

  const reset = () => {
    value = '';
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value.trim() === '') {
      toast.warn('Please enter a search term in the search box');
    }

    getVisibleMedicines();
    reset();
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
            value={value}
            onChange={onChange}
            autoComplete="off"
            autoFocus
            placeholder="Search medicines"
          />
        </form>
      </header>
    </div>
  );
};

MedicineSearchForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MedicineSearchForm;
