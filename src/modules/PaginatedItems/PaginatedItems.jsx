import React from 'react';
import ReactPaginate from 'react-paginate';
import css from './PaginatedItems.module.css';

const PaginatedItems = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName={css.pagination}
      activeClassName={css.active}
      previousClassName={css.previous}
      nextClassName={css.next}
      disabledClassName={css.disabled}
      pageClassName={css.page}
      breakClassName={css.break}
    />
  );
};

export default PaginatedItems;
