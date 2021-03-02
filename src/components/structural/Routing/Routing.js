import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import DetailsPage from "../../pages/DetailsPage/DetailsPage";
import ResultsPage from "../../pages/ResultsPage/ResultsPage";
import FourOhFourPage from "../../pages/FourOhFourPage/FourOhFourPage";
const Routing = ({ results, setQuery, status, sort, handleSortChange }) => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route
        exact
        path="/results/:query"
        render={(props) => (
          <ResultsPage
            setQuery={setQuery}
            status={status}
            sort={sort}
            handleSortChange={handleSortChange}
            {...props}
          />
        )}
      />
      <Route
        exact
        path="/details/:id"
        render={(props) => <DetailsPage {...props} />}
      />
      <Route component={FourOhFourPage} />
    </Switch>
  );
};

export default Routing;
