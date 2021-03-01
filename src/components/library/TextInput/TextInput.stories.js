// YourComponent.stories.js

import React, { useState } from "react";

import TextInput from "./TextInput";

//👇 This default export determines where your story goes in the story list
export default {
  title: "TextInput",
  component: TextInput,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <TextInput {...args} value={value} onChange={handleChange} />;
};

export const Primary = Template.bind({});

Primary.args = {
  /*👇 The args you need here will depend on your component */
  children: "TextInput",
  placeholder: "Enter text",
  label: "Text Input",
  required: true,
  warning: false,
};

export const Secondary = Template.bind({});
