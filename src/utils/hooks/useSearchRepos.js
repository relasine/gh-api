import { useState, useEffect } from "react";
import { Octokit } from "@octokit/core";
import token from "../../utils/token";
import statuses from "../../utils/statuses";

const useSearchRepos = () => {
  const { ready, fetching, error, success } = statuses;

  const [results, setResults] = useState(null);
  const [status, setStatus] = useState(ready);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    // Normally I'd reach for axios for fetch calls or just the fetch api, but the docs recommended Octokit
    const octokit = new Octokit({ auth: token });

    const getData = async () => {
      setStatus();

      try {
        const data = await octokit.request("GET /search/repositories", {
          q: query,
        });

        setResults(data);
        setStatus(success);
        setQuery(null);
      } catch (e) {
        console.log(e);
        setStatus(error);
      }
    };

    if (query) {
      getData(fetching);
    }
  }, [query, statuses]);

  return { results, setQuery, ready, fetching, error, success, status };
};

export default useSearchRepos;
