import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filterId = nanoid();

  const handleChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <div className={css.filter}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        className={css.inputFilter}
        id={filterId}
        type="search"
        onChange={event => handleChange(event)}
      ></input>
    </div>
  );
};

export default Filter;