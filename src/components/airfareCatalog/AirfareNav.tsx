import React from "react";
import "./Airfare.scss";

const AirfareNav = () => {
  return (
    <nav className="airfare__nav">
      <ul className="airfare__list">
        <li className="airfare__item active">Самый дешёвый</li>
        <li className="airfare__item">Самый быстрый</li>
        <li className="airfare__item">Оптимальный</li>
      </ul>
    </nav>
  );
};

export default AirfareNav;
