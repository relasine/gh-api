import React from "react";
import "./Button.scss";

const Button = ({
  children,
  onClick,
  className = "",
  version = "primary",
  style = {},
  type,
}) => {
  return (
    <button
      onClick={onClick}
      className={`gh-button ${className} ${version && `gh-button--${version}`}`}
      style={{ ...style }}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
