import React from "react";
import { CardTitle, FieldsetItem } from "../ui";

const CompanySelectCard = () => {
  return (
    <section className="card">
      <div className="p-5">
        <CardTitle>Компания</CardTitle>
      </div>
      <fieldset className="pb-4">
        <FieldsetItem type={'radio'} index={1}>Все</FieldsetItem>
        <FieldsetItem type={'radio'} index={2}>S7 Airlines</FieldsetItem>
        <FieldsetItem type={'radio'} index={3}>XiamenAir</FieldsetItem>
      </fieldset>
    </section>
  );
};

export default CompanySelectCard;
