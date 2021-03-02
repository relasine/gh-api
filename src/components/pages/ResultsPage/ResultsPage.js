import React, { useEffect, useContext } from "react";
import "./ResultsPage.scss";
import CardContainer from "../../library/CardContainer/CardContainer";
import Loading from "../../library/Loading/Loading";
import { ResultsContext } from "../../structural/App/App";
import PropTypes from "prop-types";
import ErrorPage from "../ErrorPage/ErrorPage";
import BasicPage from "../BasicPage/BasicPage";
import noResultsContent from "../../../content/noResults";

const ResultsPage = ({ match }) => {
  const { results, setQuery, status } = useContext(ResultsContext);

  // Check the address bar for a query parameter and call setQuery with it
  useEffect(() => {
    if (match?.params?.query?.length) {
      setQuery(match.params.query);
    }
  }, [match, setQuery]);

  return (
    <section
      className={`gh-results-page ${
        status === "success" && (results?.length === 0 || !results?.length)
          ? "gh-results-page--no-results"
          : "gh-results-page--results"
      }`}
    >
      {status === "success" && results?.length > 0 && (
        <CardContainer cards={results} status={status} />
      )}
      {status === "success" && (results?.length === 0 || !results?.length) && (
        <BasicPage content={noResultsContent} />
      )}
      {status === "loading" && <Loading />}
      {status === "error" && (
        <ErrorPage header="500 Error" text="Something went wrong..." />
      )}
    </section>
  );
};

export default ResultsPage;

ResultsPage.propTypes = {
  match: PropTypes.object.isRequired,
};
