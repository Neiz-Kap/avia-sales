import React from "react";
import InputTitle from "./InputTitle";

const FieldsetItem = ({ type, children, index }) => {
  return (
    <div className="radio__box flex items-center w-full h-10 px-5">
      <input
        id={`company-option-${type}-${index}`}
        type={type}
        name="countries"
        value="United Kingdom"
        className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
        aria-labelledby={`company-option-${type}-${index}`}
        aria-describedby={`company-option-${type}-${index}`}
      />
      <InputTitle type={type} index={index}>{children}</InputTitle>
    </div>
  );
};

export default FieldsetItem;
