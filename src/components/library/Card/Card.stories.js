import React from "react";

import Card from "./Card";
import { BrowserRouter } from "react-router-dom";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Card",
  component: Card,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <BrowserRouter>
    <Card {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});

Primary.args = {
  /*👇 The args you need here will depend on your component */
  repoName: "Pitch Battles",
  ownerName: "Kevin Simpson",
  ownerURL: "https://github.com/relasine",
  repoURL: "https://github.com/relasine/pitch-battles-frontend",
  description:
    "Music Reading Game for Desktop. Laborum aute qui ex laborum elit fugiat consequat duis excepteur magna cupidatat.",
  homepage: "https://pitchbattles.herokuapp.com/",
  stars: "20",
  avatarURL: "https://avatars.githubusercontent.com/u/29719272?v=4",
  repoID: "162191634",
};
