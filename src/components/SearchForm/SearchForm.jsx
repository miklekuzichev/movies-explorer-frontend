import React, { useEffect } from "react";
import useValidation from '../../utils/useValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
    onSubmit,
    handleCheckboxClick,
    checkboxState,
    searchRequest,
    locationPathname,
}) {

  const CHECKBOX_INPUT_SET = {
    label: 'Короткометражки',
    type: 'checkbox',
    name: 'shortfilm',
    id: 'filter-shortfilm',
    required: false,
  };

  const {
    isValid,
    values,
    errors,
    handleChange,
    resetForm
  } = useValidation({});
 
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
  };
      
  useEffect(() => {
    if(locationPathname === '/movies') {
    resetForm({movietitle: searchRequest.movietitle});
  }
  }, [searchRequest]);

  return (
    <section className="search">
                <div className="search__container">
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        >
                        <input 
                            className="search__input" 
                            placeholder="Фильм"
                            type="text"
                            name="movietitle"
                            value={values.movietitle || ''}
                            required
                            onChange={handleChange}
                        />
                        <button 
                          className={`search__button ${!isValid && errors ? 'search__button_disabled' : ''}`}
                          type="submit"
                          disabled={!isValid}
                        >
                            Поиск
                        </button>
                        <span className={`searchform__input-error ${!isValid && errors.movietitle ? 'searchform__input-error_active' : ''}`} id="movietitle-error">{errors.movietitle || ''}</span>
          
                        <FilterCheckbox
                            settings={CHECKBOX_INPUT_SET}
                            onClick={handleCheckboxClick}
                            checkboxState={checkboxState}
                            value={values.shortfilm}
                        />
                    </form>
                </div>
            </section>
  )
}

export default SearchForm;
