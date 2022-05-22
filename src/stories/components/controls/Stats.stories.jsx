import React from "react";
import Stats from "../../../components/controls/stats/Stats";
import { bookWithSeries } from "../../mock-data";

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
  currentlyReading: bookWithSeries,
};
