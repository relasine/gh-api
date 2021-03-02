import React from "react";
import "./BasicPage.scss";
import PropTypes from "prop-types";

const BasicPage = ({ content = {} }) => {
  const { header, text = [] } = content;

  const renderText = () => {
    return text?.map((paragraph) => {
      return <p key={paragraph}>{paragraph}</p>;
    });
  };
  return (
    <section className="gh-basic-page">
      <h3>{header}</h3>
      {renderText()}
    </section>
  );
};

export default BasicPage;

BasicPage.propTypes = {
  content: PropTypes.shape({
    header: PropTypes.string.isRequired,
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
