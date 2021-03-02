import React, { useContext } from "react";
import "./CardContainer.scss";
import Card from "../Card/Card";
import useLanguages from "../../../utils/hooks/useLanguages";
import Select from "../Select/Select";
import PropTypes from "prop-types";
import { ResultsContext } from "../../structural/App/App";

const CardContainer = ({ cards = [] }) => {
  const { sort, handleSortChange } = useContext(ResultsContext);
  const { language, languages = [], handleLanguageChange } = useLanguages(
    cards
  );

  const renderCards = () => {
    return cards
      ?.filter((card) => {
        if (language) {
          return card?.name && card?.id && card.language === language;
        } else {
        }
        return card?.name && card?.id;
      })
      .map((card) => {
        return {
          repoName: card?.name,
          ownerName: card?.owner?.login,
          ownerURL: card?.owner?.html_url,
          repoURL: card?.html_url,
          avatarURL: card?.owner?.avatar_url,
          description: card?.description,
          language: card?.language,
          stars: card?.stargazers_count,
          repoID: card?.id,
        };
      })
      .map((card, index) => {
        return <Card content={card} key={`card-${index}`} />;
      });
  };

  return (
    <>
      <section className="gh-card-container__sort-and-filter">
        {languages && (
          <Select
            options={languages}
            value={language}
            label="Filter by language:"
            onChange={handleLanguageChange}
            name="filter"
            defaultValue="-"
          />
        )}
        <Select
          options={["best result", "stars"]}
          name="sort"
          label="Sort by:"
          onChange={handleSortChange}
          value={sort}
        />
      </section>
      {<section className="gh-card-container">{renderCards()}</section>}
    </>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};
