import React from "react";
import AirfareNav from "./AirfareNav";
import AirfareList from "./AirfareList";
import { Button } from "../ui";

const AirfareCatalog = () => {
  return (
    <section className="w-2/3 mb-10">
      <AirfareNav />
      <AirfareList />
      <Button>{"Показать ещё 5 билетов"}</Button>
    </section>
  );
};

export default AirfareCatalog;
