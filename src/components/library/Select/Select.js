import React from "react";
import "./Select.scss";

const Select = ({
  options = [],
  onChange,
  value,
  name,
  id,
  label,
  placeholder = "-",
}) => {
  const renderOptions = () => {
    const withPlaceholder = ["-", ...options];
    return withPlaceholder.map((option) => {
      return <option className={"gh-option"}>{option}</option>;
    });
  };

  return (
    <>
      {label && name && (
        <label className="gh-select__label" for={name}>
          {label}
        </label>
      )}
      <select
        onChange={onChange}
        value={value || placeholder}
        name={name}
        id={id}
        className="gh-select"
      >
        {renderOptions()}
      </select>
    </>
  );
};

export default Select;
