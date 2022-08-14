import React, { useState, useEffect } from "react";
import AirfareItem from "./AirfareItem";

import S7 from "../../assets/S7.svg";
import XiamenAir from "../../assets/XiamenAir.svg";
import { fetchTikets } from "./../../http/index";

const AirfareList = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetchTikets().then((data) => setTickets(data));
  }, []);
  return (
    <section>
      {tickets.length === 0 ? (
        <div>Билеты грузятся. Или нет...</div>
      ) : (
        tickets.map((ticket) => {
          return <AirfareItem key={ticket.id} ticket={ticket} />;
        })
      )}
    </section>
  );
};

export default AirfareList;
