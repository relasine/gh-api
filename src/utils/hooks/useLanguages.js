import { useEffect, useState } from "react";

const useLanguages = (results) => {
  const [language, setLanguage] = useState(null);
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    const getLanguages = () => {
      const allLanguages = results?.reduce((allLanguages, result) => {
        if (!allLanguages.includes(result?.language)) {
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

  return { language, languages, setLanguage };
};

export default useLanguages;
