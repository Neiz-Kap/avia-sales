import React from "react";
import AirfareItem from "./AirfareItem";

import S7 from "../../assets/S7.svg";
import XiamenAir from "../../assets/XiamenAir.svg";

const AirfareList = () => {
  const data = [
    {
      airLogo: S7,
      amount: 13400,
      route: "Moscow - Lugansk",
      routeTime: "10:40 - 18:09",
      status: "В пути",
      airTime: "21ч 15м",
      airTransferCount: "Без пересадок",
      airTransferNames: "",
    },
    {
      airLogo: XiamenAir,
      amount: 1212312321412312,
      route:
        "El Pueblo de Nuestra Señora la Reina de los Ángeles sobre el Río Porciúncula - Moscow",
      routeTime: "10:40 - 18:09",
      status: "В пути",
      airTime: "21ч 15м 15с",
      airTransferCount: "20 пересадок волос",
      airTransferNames:
        "HKG, JNB, HKG, JNB, HKG, JNB, HKG, JNB, HKG, JNB, HKG, JNB, HKG, JNB, HKG, JNB",
    },
  ];
  return (
    <section>
      {data.map((airline) => {
        return (
          <AirfareItem
            airLogo={airline.airLogo}
            amount={airline.amount}
            route={airline.route}
            routeTime={airline.routeTime}
            status={airline.status}
            airTime={airline.airTime}
            airTransferCount={airline.airTransferCount}
            airTransferNames={airline.airTransferNames}
          />
        );
      })}
    </section>
  );
};

export default AirfareList;
