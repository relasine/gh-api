import React from "react";
import "./Card.scss";
import Link from "../Button/Link";
import noAvatar from "../../../assets/images/no-ava.png";
import PropTypes from "prop-types";

const Card = ({ content = {} }) => {
  const {
    repoName,
    ownerName,
    ownerURL,
    repoURL,
    description,
    stars,
    avatarURL,
    repoID,
    language,
  } = content;

  const abbreviateDescription = () => {
    if (description?.length > 90) {
      return `${description?.slice(0, 100)}...`;
    } else if (!description || !description?.length) {
      return "None";
    } else {
      return description;
    }
  };

  return (
    <article className="gh-card">
      <img
        src={avatarURL || noAvatar}
        alt={avatarURL ? `${ownerName}-github-avatar` : "placeholder avatar"}
        className="gh-card__avatar"
      />
      <section className="gh-card__content">
        <h4>
          <span className="gh-card__label gh-card__label--repo">
            Repository:{" "}
          </span>
          <a
            href={repoURL}
            target="__blank"
            className="gh-card__repo-link gh-card__link"
          >
            {repoName?.replace("_", " ")}
          </a>
        </h4>
        <p className="gh-card__repo-owner">
          <span className="gh-card__label gh-card__label--owner">Owner: </span>
          <a
            href={ownerURL}
            target="__blank"
            className="gh-card__owner-link gh-card__link"
          >
            {ownerName}
          </a>
        </p>
        <p className="gh-card__repo-language">
          <span className="gh-card__label gh-card__label--language">
            Language:{" "}
          </span>
          {language}
        </p>
        <p className="gh-card__description" max-length="90">
          <span className="gh-card__label gh-card__label--description">
            Description:{" "}
          </span>
          {abbreviateDescription()}
        </p>
        <p className="gh-card__stars">
          <span className="gh-card__stars_label gh-card__label">Stars: </span>{" "}
          {stars}
        </p>
      </section>
      <Link to={`/details/${repoID}`}>Learn More</Link>
    </article>
  );
};

export default Card;

Card.propTypes = {
  repoName: PropTypes.string,
  ownerName: PropTypes.string,
  ownerURL: PropTypes.string,
  repoURL: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.string,
  avatarURL: PropTypes.string,
  repoID: PropTypes.number,
  language: PropTypes.string,
};
