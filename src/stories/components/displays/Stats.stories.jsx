import React from "react";
import Stats from "../../../components/displays/stats/Stats";

export default {
  title: "Stats",
  component: Stats,
};

const Template = (args) => <Stats {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  books: 123,
  authors: 42,
  read: 100,
  toRead: 22,
  reading: 1,
};
