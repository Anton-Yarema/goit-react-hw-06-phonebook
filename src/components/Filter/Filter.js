import React from 'react';
import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../store/filterSlice';
import { getFilter } from '../../store/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <label className={css.formField}>
      Find contacts by name
      <input
        className={css.formFieldInput}
        type="text"
        name="name"
        onChange={handleFilterChange}
        value={filter}
      />
    </label>
  );
};

export default Filter;
