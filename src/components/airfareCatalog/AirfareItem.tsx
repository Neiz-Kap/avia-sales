import React from "react";

import "./Airfare.scss";

interface IAirfareItem {
  airLogo: any;
  amount: number | string;
  route: string;
  routeTime: string | Date[];
  status: string;
  airTime: string | Date;
  airTransferCount: string | number;
  airTransferNames: string | number | null;
}

const AirfareItem = ({
  airLogo,
  amount,
  route,
  routeTime,
  status,
  airTime,
  airTransferCount,
  airTransferNames,
}: IAirfareItem) => {
  return (
    <article className="card p-5 mb-5">
      <div className="mb-5 flex justify-between">
        <p className="airfare__amount">
          {`${amount}`
            .split("")
            .reverse()
            .map((number, i) => (i != 0 && i % 3 == 0 ? `${number} ` : number))
            .reverse()
            .join("")}{" "}
          Р
        </p>
        <img src={airLogo} alt="" />
      </div>
      <div className="flex">
        <div className="w-1/3 mr-5">
          <p className="airfare-item__name">{route}</p>
          <p className="airfare-item__number">{routeTime}</p>
        </div>
        <div className="w-1/3 mr-5">
          <p className="airfare-item__name">{status}</p>
          <p className="airfare-item__number">{airTime}</p>
        </div>
        <div className="w-1/3">
          <p className="airfare-item__name">{airTransferCount}</p>
          <p className="airfare-item__number">
            {airTransferCount.toLowerCase() === "Без пересадок"
              ? airTransferNames
              : ""}
          </p>
        </div>
      </div>
    </article>
  );
};

export default AirfareItem;
