import React from 'react'
import './AirfareSearch.scss'

const AirfareSearch = () => {
  return (
    <section className="search__container">
      <div className="search__box shadow-box">
        <input
          className="search__input search__input--first"
          placeholder="Откуда"
          type="text"
        />
      </div>
      <button></button>
      <div className="search__box shadow-box">
        <input className="search__input" placeholder="Куда" type="text" />
      </div>
      <div className="search__box shadow-box">
        <input className="search__input" placeholder="Когда" type="date" />
      </div>
      <div className="search__box shadow-box">
        <input className="search__input search__input--last" placeholder="Обратно" type="date" />
      </div>
    </section>
  );
}

export default AirfareSearch