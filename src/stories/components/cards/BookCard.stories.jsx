import React from "react";
import BookCard from "../../../components/cards/BookCard/BookCard";
import { bookWithOutSeries, bookWithSeries } from "../../mock-data";
export default {
  title: "Book Card",
  component: BookCard,
};

const Template = (args) => <BookCard {...args} />;

export const StandardWithoutSeries = Template.bind({});
StandardWithoutSeries.args = {
  book: bookWithOutSeries,
  complexity: "full",
};

export const StandardWithSeries = Template.bind({});
StandardWithSeries.args = {
  book: bookWithSeries,
  complexity: "full",
};

export const SimpleComplexity = Template.bind({});
SimpleComplexity.args = {
  book: bookWithSeries,
  complexity: "simple",
};

export const CoverOnly = Template.bind({});
CoverOnly.args = {
  book: bookWithSeries,
  complexity: "coverOnly",
};

export const NoCover = Template.bind({});
NoCover.args = {
  book: bookWithSeries,
  complexity: "noCover",
};
