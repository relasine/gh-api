import { useState, useEffect } from "react";
import { Octokit } from "@octokit/core";
import token from "../../utils/token";

const useSearchRepos = () => {
  const [results, setResults] = useState(null);
  const [status, setStatus] = useState("ready");
  const [query, setQuery] = useState(null);
  const [sort, setSort] = useState("best-match");

  // Sort is worked into the fetch logic for the case in which the volume of results in the response is below the total volume of responses in github, which could potenttially lead to repos with higher star counts didn't make the cut of best match criteria. It would obviously be much easier to simply sort from the ResultsPage, but I felt that it was important to leave room for this responsiblity. //

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    const storedResult = JSON.parse(localStorage.getItem("gh-results"));

    // Local storage is leveraged here so that if a user refreshes the page, the last search is not lost - this is particularly important on the details page //
    if (storedResult?.query === query && storedResult?.sort === sort) {
      setResults(storedResult.results);
      setStatus("success");
    }
  }, []);

  useEffect(() => {
    // Normally I'd reach for axios for fetch calls or just the fetch api, but the docs recommended Octokit, so here we are! //

    const octokit = new Octokit({ auth: token });

    const getData = async () => {
      setStatus("loading");

      try {
        const response = await octokit.request("GET /search/repositories", {
          q: query,
          sort: sort,
        });

        setResults(response?.data?.items);
        localStorage.setItem(
          "gh-results",
          JSON.stringify({ results: response?.data?.items, query, sort })
        );
        setStatus("success");
      } catch (e) {
        console.log(e);
        setStatus("error");
      }
    };

    if (query) {
      getData();
    }
  }, [query, sort]);

  return {
    results,
    setQuery,
    status,
    sort,
    handleSortChange,
  };
};

export default useSearchRepos;
