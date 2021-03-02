import React from "react";
import "./TextInput.scss";
import PropTypes from "prop-types";

const TextInput = ({
  value,
  onChange,
  style,
  className,
  name,
  placeholder = "",
  label,
  required,
  warning,
}) => {
  return (
    <>
      {label && name && (
        <label className="gh-input-label" htmlFor={name}>
          {label}
          {required && <span className="gh-input-label__star">*</span>}
        </label>
      )}
      <input
        type="text"
        className={`gh-input ${className && className} ${
          warning && "gh-input--warning"
        }`}
        style={{ ...style }}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
};

export default TextInput;

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  required: PropTypes.bool,
  warning: PropTypes.bool,
};
