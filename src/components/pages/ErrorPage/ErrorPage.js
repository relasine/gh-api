import React from "react";
import Link from "../../library/Button/Link";
import "./ErrorPage.scss";
import PropTypes from "prop-types";

const ErrorPage = ({ header, text }) => {
  return (
    <section className="error-page">
      <h2>{header}</h2>
      <p>{text}</p>
      <Link to="/">Home</Link>
    </section>
  );
};

export default ErrorPage;

ErrorPage.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
};
