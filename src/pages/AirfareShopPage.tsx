import React from "react";
import { Aside, AirfareCatalog, Container, AirfareSearch } from "../components";

const AirfareShopPage = () => {
  return (
    <Container>
      <AirfareSearch/>
      <main className="flex justify-between flex-row">
        <Aside />
        <AirfareCatalog />
      </main>
    </Container>
  );
};

export default AirfareShopPage;
