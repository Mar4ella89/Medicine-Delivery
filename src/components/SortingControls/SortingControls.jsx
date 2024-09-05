import css from './SortingControls.module.css';

const SortingControls = ({
  onFilterByFavorite,
  onSortFromCheap,
  onSortFromExpensive,
  onSortByName,
}) => {
  return (
    <div className={css.wrapper}>
      <span className={css.title}>Sorting:</span>
      <span onClick={onFilterByFavorite} className={css.sortingItem}>
        Favorites
      </span>
      <span onClick={onSortFromCheap} className={css.sortingItem}>
        From cheap to expensive
      </span>
      <span onClick={onSortFromExpensive} className={css.sortingItem}>
        From expensive to cheap
      </span>
      <span onClick={onSortByName} className={css.sortingItem}>
        Sort by Name (A to Z)
      </span>
    </div>
  );
};

export default SortingControls;
