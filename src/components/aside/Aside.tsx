import React from "react";
import CompanySelectCard from "./CompanySelectCard";
import TransferCountCard from "./TransferCountCard";

import './Aside.scss'

const Aside = () => {
  return (
    <aside className="aside">
      <TransferCountCard />
      <CompanySelectCard />
    </aside>
  );
};

export default Aside;
