import React, { useEffect, useState } from "react";
import "./DetailsPage.scss";

const DetailsPage = ({ results, match }) => {
  const [repo, setRepo] = useState(null);
  const [noMatch, setNoMatch] = useState(null);

  useEffect(() => {
    if (match?.params?.id?.length) {
      const id = match?.params?.id;

      const matchingRepo = results?.find((result) => {
        return result?.id === parseInt(id);
      });

      if (!matchingRepo) {
        setNoMatch(true);
        setRepo(null);
      } else {
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
          defaultBranch: matchingRepo.defaultBranch,
          archived: matchingRepo.archived,
          openIssues: matchingRepo.open_issues,
        };

        setRepo(formattedRepo);
        setNoMatch(false);
      }
    }
  }, [match]);

  return (
    <section className="gh-results-page">
      {repo && (
        <>
          <h2>{repo?.repoName}</h2>
          <p>{repo?.ownerName}</p>
          <p>{repo?.ownerURL}</p>
          <img src={repo?.avatarURL} alt={repo?.ownerName} />
        </>
      )}
      {noMatch && <p>No Results</p>}
    </section>
  );
};

export default DetailsPage;
