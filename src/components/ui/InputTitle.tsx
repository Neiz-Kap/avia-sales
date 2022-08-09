import React from 'react'

const InputTitle = ({ children, type, index }) => {
  return (
    <label
      for={`company-option-${type}-${index}`}
      className="w-full text-sm font-normal text-gray-800 ml-2 block"
    >
      {children}
    </label>
  );
};

export default InputTitle