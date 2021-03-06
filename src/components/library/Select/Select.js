import React from "react";
import "./Select.scss";
import PropTypes from "prop-types";
const Select = ({
  options = [],
  onChange,
  value,
  name,
  id,
  label,
  defaultValue,
}) => {
  const renderOptions = () => {
    if (defaultValue) {
      const withdefaultValue = ["-", ...options];
      return withdefaultValue.map((option) => {
        return (
          <option className={"gh-option"} key={option}>
            {option}
          </option>
        );
      });
    } else {
      return options?.map((option) => {
        return (
          <option className={"gh-option"} key={option}>
            {option}
          </option>
        );
      });
    }
  };

  return (
    <div className="gh-select__wrapper">
      {label && name && (
        <label className="gh-select__label" htmlFor={name}>
          {label}
        </label>
      )}
      <select
        onChange={onChange}
        value={value || defaultValue}
        name={name}
        id={id}
        className="gh-select"
      >
        {renderOptions()}
      </select>
    </div>
  );
};

export default Select;

Select.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
};
