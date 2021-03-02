import React from "react";
import "./TextInput.scss";

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
