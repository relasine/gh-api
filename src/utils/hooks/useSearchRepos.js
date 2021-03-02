import { useState, useEffect } from "react";
import octokit from "../makeOctokit";
import token from "../../utils/token";

const useSearchRepos = () => {
  const [results, setResults] = useState(null);
  const [status, setStatus] = useState("ready");
  const [query, setQuery] = useState(null);
  const [sort, setSort] = useState("best-match");

  // Sort is worked into the fetch logic for the case in which the volume of results in the response is below the total volume of responses in github (ie. 100+), which could potenttially lead to repos with higher star counts not making the cut of best match criteria. It would obviously be much easier to simply sort from the ResultsPage, but I felt that it was important to leave room for this possibility. //

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    // Normally I'd reach for axios for fetch calls or just the fetch api, but the docs recommended Octokit, so here we are! //

    const getData = async () => {
      setStatus("loading");
      const storedResults = JSON.parse(localStorage.getItem("gh-results"));

      if (storedResults?.query === query && storedResults?.sort === sort) {
        // compare localStorage results sort/query to current sort/query and set into state if matches to avoid unecessary fetching
        setResults(storedResults?.results);
        setStatus("success");
        return;
      }

      try {
        const response = await octokit.request("GET /search/repositories", {
          q: query,
          sort: sort,
        });

        setResults(response?.data?.items);

        // set into local storage so that refreshing on the DetailsPage doesn't require the user to re-search and click through
        // this would be easier if you could query repos by id, but you can't
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
    query,
  };
};

export default useSearchRepos;
