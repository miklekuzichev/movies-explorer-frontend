import React from "react";

function SearchForm({

}) {

  return (
    <section className="search">
                <div className="search__container">
                    <form>
                        <input className="search__input" placeholder="Фильм" type="text"/>
                        <button className="search__button" type="submit">
                            Поиск
                        </button>
                    </form>
                    <div className="search__short">
                        <label className="search__switch">
                            <input type="checkbox" className="search__short-input"/>
                            <span className="search__short-slider"></span>
                        </label>
                        <p className="search__short-text">Короткометражки</p>
                    </div>
                </div>
            </section>
  )
}

export default SearchForm;
