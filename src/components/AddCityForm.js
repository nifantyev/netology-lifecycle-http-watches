import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import CityModel from '../models/CityModel';

const AddCityForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    offset: 0,
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(new CityModel(nanoid(), form.name, parseInt(form.offset)));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__item">
        <label className="form__label" htmlFor="name">
          Название
        </label>
        <input
          className="form__input"
          type="text"
          value={form.name}
          onChange={handleChange}
          id="name"
          name="name"
        />
      </div>
      <div className="form__item">
        <label className="form__label" htmlFor="offset">
          Временая зона
        </label>
        <input
          className="form__input"
          type="number"
          value={form.offset}
          onChange={handleChange}
          id="offset"
          name="offset"
        />
      </div>
      <div className="form__item">
        <button className="form__button" type="submit">
          Добавить
        </button>
      </div>
    </form>
  );
};

AddCityForm.propTypes = {
  onAdd: PropTypes.func,
};

export default AddCityForm;
