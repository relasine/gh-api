import React, { useEffect } from "react";
import "./App.scss";
import useSearchRepos from "../../../utils/hooks/useSearchRepos";
const App = () => {
  const { results, status, setQuery } = useSearchRepos();

  useEffect(() => {
    setQuery("pitch-battles-frontend");
  }, []);

  return <div className="App">App</div>;
};

export default App;
