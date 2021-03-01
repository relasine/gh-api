import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./Button.scss";

const Link = ({
  to,
  href,
  className,
  style,
  children,
  onClick,
  version = "primary",
}) => {
  if (to?.startsWith("/")) {
    return (
      <RouterLink
        to={to}
        className={`gh-button--link ${className} gh-button gh-button--${version}`}
        style={{ ...style }}
        onClick={onClick}
      >
        {children}
      </RouterLink>
    );
  } else if (to || href) {
    return (
      <a
        href={to || href}
        className={`gh-button--link ${className} gh-button gh-button--${version}`}
        style={{ ...style }}
        onClick={onClick}
      >
        {children}
      </a>
    );
  } else {
    return null;
  }
};

export default Link;
