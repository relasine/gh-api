// YourComponent.stories.js

import React from "react";

import Button from "./Button";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Button",
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  /*👇 The args you need here will depend on your component */
  children: "Button",
  version: "primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  /*👇 The args you need here will depend on your component */
  children: "Button",
  version: "secondary",
};
