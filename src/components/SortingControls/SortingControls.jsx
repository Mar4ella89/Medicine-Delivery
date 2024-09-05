import { useState } from 'react';

import css from './SortingControls.module.css';

const SortingControls = ({
  onFilterByFavorite,
  onSortFromCheap,
  onSortFromExpensive,
  onSortByName,
}) => {
  const [activeSort, setActiveSort] = useState(null);

  const handleClick = (sortType, sortFunction) => {
    setActiveSort(sortType);
    sortFunction();
  };

  return (
    <div className={css.wrapper}>
      <span className={css.title}>Sorting:</span>
      <span
        onClick={() => handleClick('favorite', onFilterByFavorite)}
        className={`${css.sortingItem} ${
          activeSort === 'favorite' ? css.selected : ''
        }`}
      >
        Favorites
      </span>
      <span
        onClick={() => handleClick('cheap', onSortFromCheap)}
        className={`${css.sortingItem} ${
          activeSort === 'cheap' ? css.selected : ''
        }`}
      >
        From cheap to expensive
      </span>
      <span
        onClick={() => handleClick('expencive', onSortFromExpensive)}
        className={`${css.sortingItem} ${
          activeSort === 'expencive' ? css.selected : ''
        }`}
      >
        From expensive to cheap
      </span>
      <span
        onClick={() => handleClick('name', onSortByName)}
        className={`${css.sortingItem} ${
          activeSort === 'name' ? css.selected : ''
        }`}
      >
        Sort by Name (A to Z)
      </span>
    </div>
  );
};

export default SortingControls;
