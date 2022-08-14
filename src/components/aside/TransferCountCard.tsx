import React from "react";
import { CardTitle, FieldsetItem } from "../ui";

const TransferCountCard = () => {
  return (
    <section className="shadow-box mb-5">
      <div className="p-5">
        <CardTitle>Количество пересадок</CardTitle>
      </div>
      <fieldset className="pb-4">
        <FieldsetItem type={"checkbox"} index={1}>
          Без пересадок
        </FieldsetItem>
        <FieldsetItem type={"checkbox"} index={2}>
          1 пересадка
        </FieldsetItem>
        <FieldsetItem type={"checkbox"} index={3}>
          2 пересадка
        </FieldsetItem>
        <FieldsetItem type={"checkbox"} index={4}>
          3 пересадка
        </FieldsetItem>
      </fieldset>
    </section>
  );
};

export default TransferCountCard;
