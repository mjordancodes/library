import React from "react";
import Button from "../../../components/controls/button/Button";

export default {
  title: "Buttons",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  url: "/",
  displayText: "Read",
};
