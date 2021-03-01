// YourComponent.stories.js

import React from "react";

import Select from "./Select";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Select",
  component: Select,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  options: ["dog", "cat", "bird", "hamster", "ferret"],
  name: "animals",
  onChange: (e) => console.log(e.target.value, e.target.name),
  value: "dog",
  label: "Choose your fighter:",
};
