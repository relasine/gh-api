import React from "react";
import { Switch, Route } from "react-router-dom";
import BasicPage from "../../pages/BasicPage/BasicPage";
import DetailsPage from "../../pages/DetailsPage/DetailsPage";
import ResultsPage from "../../pages/ResultsPage/ResultsPage";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import homeContent from "../../../content/home";

const Routing = () => {
  return (
    <Switch>
      <Route
        path="/"
        render={() => <BasicPage content={homeContent} />}
        exact
      />
      <Route
        exact
        path="/results/:query"
        render={(props) => <ResultsPage {...props} />}
      />
      <Route
        exact
        path="/details/:id"
        render={(props) => <DetailsPage {...props} />}
      />
      <Route
        render={() => (
          <ErrorPage
            header="404 Error"
            text="Looks like you're lost, friend."
          />
        )}
      />
    </Switch>
  );
};

export default Routing;
