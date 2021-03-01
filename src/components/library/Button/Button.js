import React from "react";
import "./Button.scss";

const Button = ({
  children,
  onClick,
  className = "",
  version = "primary",
  style = {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`gh-button ${className} ${version && `gh-button--${version}`}`}
      style={{ ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
