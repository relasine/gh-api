import { useEffect, useState, useCallback } from "react";

const useDetails = (results, match, history) => {
  const [repo, setRepo] = useState(null);
  const [noMatchInState, setNoMatchInState] = useState(null);
  const [storageChecked, setStorageChecked] = useState(false);

  const formatAndSetContent = useCallback((matchingRepo) => {
    // takes the data from the matching respository either in state or localStorage, formats it, and puts it into state so it can be consumed by this component. Normally I'd just keep this in useEffect, but it's required in both and I wanted to keep my code DRY. This does, however, mean that it needs to be wrapped in useCallback so that changes to it (however unlikely) don't lead to update loops //

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
  }, []);

  useEffect(() => {
    const getRepo = () => {
      // search the repos in state for a match
      if (match?.params?.id?.length) {
        const id = match?.params?.id;

        const matchingRepo = results?.find((result) => {
          return result?.id === parseInt(id);
        });

        if (!matchingRepo) {
          setNoMatchInState(true);
        } else {
          setNoMatchInState(false);
          formatAndSetContent(matchingRepo);
        }
      }
    };

    if (match) {
      getRepo();
    }
  }, [match, results, formatAndSetContent]);

  useEffect(() => {
    const checkLocalStorage = () => {
      // if there is no matching data in state, this will check localStorage for a match in the event that the user refreshes the application //

      const storedData = JSON.parse(localStorage.getItem("gh-results"));

      if (storedData?.results) {
        const id = match?.params?.id;

        const matchingRepo = storedData?.results?.find((result) => {
          return result?.id === parseInt(id);
        });

        if (!matchingRepo) {
          // if no match has been found in state or local storage, forward the user home //
          history.push("/");
        } else {
          setStorageChecked(true);
          formatAndSetContent(matchingRepo);
        }
      } else {
        history.push("/");
      }
    };

    if (noMatchInState === true && storageChecked === false) {
      // if state is checked and localStorage has not been checked, check localStorage
      checkLocalStorage();
    }
  }, [
    match,
    results,
    noMatchInState,
    formatAndSetContent,
    storageChecked,
    history,
  ]);

  return {
    repo,
    setRepo,
    noMatchInState,
    setNoMatchInState,
    storageChecked,
    setStorageChecked,
  };
};

export default useDetails;
