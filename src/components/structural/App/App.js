import React, { useEffect } from "react";
import "./App.scss";
import useSearchRepos from "../../../utils/hooks/useSearchRepos";

import Hero from "../../library/Hero/Hero";
import Footer from "../../library/Footer/Footer";
import Routing from "../Routing/Routing";

const App = () => {
  const {
    results,
    setQuery,
    status,
    sort,
    handleSortChange,
  } = useSearchRepos();

  return (
    <div className="App">
      <Hero />
      <Routing
        results={results}
        setQuery={setQuery}
        status={status}
        sort={sort}
        handleSortChange={handleSortChange}
      />
      <Footer />
    </div>
  );
};

export default App;
