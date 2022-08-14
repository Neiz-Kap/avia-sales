import React from "react";

import "./Airfare.scss";
import { Ticket } from "../../types/index";
import {
  transformUnixToTime,
  transformUnixToDuration,
  timeDifference,
} from "../../utils/helpers";

const AirfareItem = ({ ticket }: Ticket) => {
  const {
    price,
    companyId,
    info: { origin, destination, dateStart, dateEnd, stops, duration },
  } = ticket;
  const formatedPrice = `${price}`
    .split("")
    .reverse()
    .map((number, i) => (i != 0 && i % 3 == 0 ? `${number} ` : number))
    .reverse()
    .join("");

  const status =
    timeDifference(dateStart) < 0
      ? "Ожидает"
      : timeDifference(dateEnd) < 0 && timeDifference(dateStart) >= 0
      ? `В пути`
      : `Полёт завершён`;

  return (
    <article className="shadow-box p-5 mb-5">
      <div className="mb-5 flex justify-between">
        <p className="airfare__amount">{formatedPrice}{' Р'}</p>
        {/* <img src={} alt="logo" /> */}
      </div>
      <div className="flex">
        <div className="w-1/3 mr-5">
          <p className="airfare-item__name">
            {origin} - {destination}
          </p>

          <p className="airfare-item__number">
            {transformUnixToTime(dateStart)} - {transformUnixToTime(dateEnd)}
          </p>
        </div>
        <div className="w-1/3 mr-5">
          <p className="airfare-item__name">{status}</p>
          <p className="airfare-item__number">
            {transformUnixToDuration(duration)}
          </p>
        </div>
        <div className="w-1/3">
          <p className="airfare-item__name">
            {stops.length === 0 ? "Без" : `${stops.length}`}
            {stops.length === 1 ? " пересадка" : " пересадок"}
          </p>
          <p className="airfare-item__number">{stops.join(", ")}</p>
        </div>
      </div>
    </article>
  );
};

export default AirfareItem;
