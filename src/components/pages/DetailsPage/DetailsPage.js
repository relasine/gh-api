import React, { useContext } from "react";
import useDetails from "../../../utils/hooks/useDetails";
import "./DetailsPage.scss";
import { ResultsContext } from "../../structural/App/App";
import PropTypes from "prop-types";

const DetailsPage = ({ match, history }) => {
  const { results } = useContext(ResultsContext);

  const { repo } = useDetails(results, match, history);

  return (
    <section className="gh-results-page">
      {repo && (
        <>
          <div className="gh-results-page__header">
            <h2>{repo?.repoName}</h2>
            <a
              href={repo?.repoURL}
              target="__blank"
              className="gh-results-page__repo-link gh-results-page__link"
            >
              Repository Link
            </a>
          </div>
          <div className="gh-results-page__main">
            <p>
              <span className="gh-results-page__label">Description: </span>
              {repo?.description}
            </p>
            <p>
              <span className="gh-results-page__label">Language: </span>
              {repo?.language}
            </p>
            <p>
              <span className="gh-results-page__label">Repository ID: </span>
              {repo?.repoID}
            </p>
            <p>
              <span className="gh-results-page__label">Stars: </span>
              {repo?.stars}
            </p>
            <p>
              <span className="gh-results-page__label">Archived: </span>
              {repo?.archived.toString()}
            </p>
            <p>
              <span className="gh-results-page__label">Forks: </span>
              {repo?.forks}
            </p>
            <p>
              <span className="gh-results-page__label">Forked: </span>
              {repo?.forkedApplication.toString()}
            </p>
            <p>
              <span className="gh-results-page__label">Default branch: </span>
              {repo?.defaultBranch}
            </p>
            {repo?.homepage?.length > 0 && (
              <a
                className="gh-results-page__link"
                href={repo?.homepage}
                target="__blank"
              >
                Application Homepage
              </a>
            )}
            <a
              className="gh-results-page__link"
              href={repo?.issuesURL}
              target="__blank"
            >
              Repository Issues (currently open: {repo?.openIssues})
            </a>
          </div>
          <div className="gh-results-page__author-section">
            <img
              className="gh-results-page__avatar"
              src={repo?.avatarURL}
              alt={repo?.ownerName}
            />
            <div className="gh-results-page__author-content">
              <p className="gh-results-page__owner gh-results-page__owner--desktop">
                <span className="gh-results-page__label">Github User ID: </span>
                {repo?.ownerName}
              </p>
              <a
                className="gh-results-page__owner-link gh-results-page__owner-link--desktop gh-results-page__link"
                href={repo?.ownerURL}
                target="__blank"
              >
                {repo?.ownerURL}
              </a>
              <p className="gh-results-page__owner-label--mobile">
                Github User ID:{" "}
              </p>
              <a
                className="gh-results-page__owner-link gh-results-page__link gh-results-page__link--mobile"
                href={repo?.ownerURL}
                target="__blank"
              >
                <p className="gh-results-page__owner gh-results-page__owner--mobile">
                  {repo?.ownerName}
                </p>
              </a>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default DetailsPage;

DetailsPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
