import { useEffect, useState } from "react";

const useLanguages = (results) => {
  const [language, setLanguage] = useState(null);
  const [languages, setLanguages] = useState(null);

  const handleLanguageChange = (e) => {
    if (e.target.value === "-") {
      setLanguage(null);
    } else {
      setLanguage(e.target.value);
    }
  };

  useEffect(() => {
    const getLanguages = () => {
      const allLanguages = results?.reduce((allLanguages, result) => {
        if (
          !allLanguages.includes(result?.language) &&
          result?.language?.length
        ) {
          allLanguages.push(result.language);
        }

        return allLanguages;
      }, []);

      if (allLanguages.length) {
        setLanguages(allLanguages);
      }
    };

    if (results?.length) {
      getLanguages();
    }
  }, [results]);

  return { language, languages, handleLanguageChange };
};

export default useLanguages;
