import React from "react";
import { Aside, AirfareCatalog, Container } from "../components";

const AirfareShopPage = () => {
  return (
    <Container>
      <main className="flex flex-col justify-center lg:flex-row">
        <Aside />
        <AirfareCatalog />
      </main>
    </Container>
  );
};

export default AirfareShopPage;
