import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

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

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  version: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
};
