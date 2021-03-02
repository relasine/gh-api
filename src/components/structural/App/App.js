import React, { createContext } from "react";
import "./App.scss";
import useSearchRepos from "../../../utils/hooks/useSearchRepos";

import Hero from "../../library/Hero/Hero";
import Footer from "../../library/Footer/Footer";
import Routing from "../Routing/Routing";

export const ResultsContext = createContext();
// I know that the Context API is silly in an application this small, but Jonathan and I did discuss it being a part of the job, so I figured it'd be smart to show me actually using it. //

const App = () => {
  const {
    results,
    setQuery,
    status,
    sort,
    handleSortChange,
  } = useSearchRepos();

  return (
    <ResultsContext.Provider
      value={{ results, setQuery, handleSortChange, sort, status }}
    >
      <div className="App">
        <Hero />
        <Routing />
        <Footer />
      </div>
    </ResultsContext.Provider>
  );
};

export default App;
