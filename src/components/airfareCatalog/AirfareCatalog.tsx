import React from "react";
import AirfareNav from "./AirfareNav";
import AirfareList from "./AirfareList";
import { Button } from "../ui";

const AirfareCatalog = () => {
  return (
    <section className="lg:w-1/2 mb-10">
      <AirfareNav />
      <AirfareList />
      <Button>{"Показать ещё 5 билетов"}</Button>
    </section>
  );
};

export default AirfareCatalog;
