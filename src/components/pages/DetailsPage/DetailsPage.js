import React, { useEffect, useState } from "react";
import "./DetailsPage.scss";

const DetailsPage = ({ results, match }) => {
  const [repo, setRepo] = useState(null);
  const [noMatch, setNoMatch] = useState(null);

  useEffect(() => {
    const formatAndSetContent = (matchingRepo) => {
      // takes the data from the matching respository either in state or localStorage, formats it, and puts it into state so it can be consumed by this component //

      const formattedRepo = {
        repoName: matchingRepo.name,
        ownerName: matchingRepo.owner?.login,
        ownerURL: matchingRepo.owner?.html_url,
        repoURL: matchingRepo.html_url,
        avatarURL: matchingRepo.owner?.avatar_url,
        description: matchingRepo.description,
        language: matchingRepo.language,
        stars: matchingRepo.stargazers_count,
        repoID: matchingRepo.id,
        forks: matchingRepo.forks,
        issuesURL: matchingRepo.issues_url,
        homepage: matchingRepo.homepage,
        forkedApplication: matchingRepo.fork,
        defaultBranch: matchingRepo.default_branch,
        archived: matchingRepo.archived,
        openIssues: matchingRepo.open_issues,
      };

      setRepo(formattedRepo);
      setNoMatch(false);
    };

    const checkLocalStorage = () => {
      // if there is no matching data in state, this will check localStorage for a match in the event that the user refreshes the application //

      const storedData = JSON.parse(localStorage.getItem("gh-results"));

      if (storedData?.results) {
        const id = match?.params?.id;

        const matchingRepo = storedData?.results?.find((result) => {
          return result?.id === parseInt(id);
        });

        if (!matchingRepo) {
          setNoMatch(true);
          setRepo(null);
        } else {
          formatAndSetContent(matchingRepo);
        }
      }
    };

    const getRepo = () => {
      // search the repos in state for a match
      if (match?.params?.id?.length) {
        const id = match?.params?.id;

        const matchingRepo = results?.find((result) => {
          return result?.id === parseInt(id);
        });

        if (!matchingRepo) {
          checkLocalStorage();
        } else {
          formatAndSetContent(matchingRepo);
        }
      }
    };

    if (match) {
      getRepo();
    }
  }, [match, results]);

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
      {noMatch && <p>No Results. Please search again.</p>}
    </section>
  );
};

export default DetailsPage;
