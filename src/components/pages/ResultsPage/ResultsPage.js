import React, { useEffect, useContext } from "react";
import "./ResultsPage.scss";
import CardContainer from "../../library/CardContainer/CardContainer";
import Loading from "../../library/Loading/Loading";
import { ResultsContext } from "../../structural/App/App";

const ResultsPage = ({ match, status, sort, handleSortChange }) => {
  const { results, setQuery } = useContext(ResultsContext);

  // Check the address bar for a query parameter and call setQuery with it
  useEffect(() => {
    if (match?.params?.query?.length) {
      setQuery(match.params.query);
    }
  }, [match, setQuery]);

  return (
    <section className="gh-results-page">
      {status === "success" && results?.length > 0 && (
        <CardContainer
          cards={results}
          handleSortChange={handleSortChange}
          sort={sort}
          status={status}
        />
      )}
      {status === "success" && (results?.length === 0 || !results?.length) && (
        <p>No Results</p>
      )}
      {status === "loading" && <Loading />}
      {status === "error" && <p>Error</p>}
    </section>
  );
};

export default ResultsPage;
