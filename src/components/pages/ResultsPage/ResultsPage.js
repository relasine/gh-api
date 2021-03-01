import React, { useEffect } from "react";
import "./ResultsPage.scss";
import CardContainer from "../../library/CardContainer/CardContainer";
import Loading from "../../library/Loading/Loading";
const ResultsPage = ({
  match,
  results,
  setQuery,
  status,
  sort,
  handleSortChange,
}) => {
  useEffect(() => {
    if (match?.params?.query?.length) {
      setQuery(match.params.query);
    }
  }, [match]);

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
