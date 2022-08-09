import React from "react";
import { Aside, Container } from "./";
import AirfareNav from "./AirfareNav";
import AirfareList from "./AirfareList";

const AirfareCatalog = () => {
  return (
    <section className="lg:w-1/2">
      <AirfareNav />
      <AirfareList />
    </section>
  );
};

export default AirfareCatalog;
