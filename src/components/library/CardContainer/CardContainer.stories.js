import React from "react";

import CardContainer from "./CardContainer";
import { BrowserRouter } from "react-router-dom";

//👇 This default export determines where your story goes in the story list
export default {
  title: "CardContainer",
  component: CardContainer,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <BrowserRouter>
    <CardContainer {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});

Primary.args = {
  /*👇 The args you need here will depend on your component */
  cards: [
    {
      repoName: "Pitch Battles",
      ownerName: "Kevin Simpson",
      ownerURL: "https://github.com/relasine",
      repoURL: "https://github.com/relasine/pitch-battles-frontend",
      description:
        "Music Reading Game for Desktop. Laborum aute qui ex laborum elit fugiat consequat duis excepteur magna cupidatat.",
      language: "JavaScript",
      stars: "20",
      avatarURL: "https://avatars.githubusercontent.com/u/29719272?v=4",
      repoID: "162191634",
    },
    {
      repoName: "war",
      ownerName: "barbalet",
      ownerURL: "https://github.com/barbalet",
      repoURL: "https://github.com/barbalet/war",
      description: "Pitched battle with the Noble Ape engine.",
      language: "JavaScript",
      stars: "20",
      avatarURL: "https://avatars.githubusercontent.com/u/201542?v=4",
      repoID: "5566868",
    },
    {
      repoName: "Pitch-Player",
      ownerName: "Jonas-Szum",
      ownerURL: "https://github.com/Jonas-Szum",
      repoURL: "https://github.com/Jonas-Szum/Pitch-Player",
      description: "Player vs. AI pitch battle",
      language: "Java",
      stars: "23",
      avatarURL: "https://avatars.githubusercontent.com/u/46059570?v=4",
      repoID: "213981154",
    },
  ],
};
