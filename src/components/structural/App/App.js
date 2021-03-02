import React, { createContext } from "react";
import "./App.scss";
import useSearchRepos from "../../../utils/hooks/useSearchRepos";

import Hero from "../../library/Hero/Hero";
import Footer from "../../library/Footer/Footer";
import Routing from "../Routing/Routing";

export const ResultsContext = createContext();
// I know that the Context API is silly in an application this small (prop drilling is fine with such a small component tree) but Jonathan and I did discuss it as being a part of the job, so I figured it'd be smart to show me actually using it. //

const App = () => {
  const {
    results,
    setQuery,
    status,
    sort,
    handleSortChange,
  } = useSearchRepos();

  return (
    <ResultsContext.Provider value={{ results, setQuery }}>
      <div className="App">
        <Hero />
        <Routing
          setQuery={setQuery}
          status={status}
          sort={sort}
          handleSortChange={handleSortChange}
        />
        <Footer />
      </div>
    </ResultsContext.Provider>
  );
};

export default App;
