import React from "react";

import BookCard from "../../../components/cards/BookCard/BookCard";

export default {
  title: "Book Card",
  component: BookCard,
};

const Template = (args) => <BookCard {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  book: {
    title: "Harold and Maude",
    coverImage:
      "https://dl.airtable.com/.attachments/eef100159ffc8d8e02d04a457cb481ab/44b95df2/482977.jpg?ts=1652214348&userId=usrW5DzrssXZF00Yv&cs=058b708650c575e8",
    series: undefined,
    seriesNumber: undefined,
    genres: ["Fiction", "Humor"],
    pages: "146",
    shelf: "Read",
    id: "rec1SubL4v9MAtVNa",
  },
  authors: ["Collin Higgins"],
  complexity: "full",
};

export const FullComplexity = Template.bind({});
FullComplexity.args = {
  book: {
    title: "The Gathering Storm",
    coverImage:
      "https://dl.airtable.com/.attachments/a6e92f7e75d78092c15bc6fd75c4b33e/f025b980/1166599._SY475_.jpg?ts=1652214348&userId=usrW5DzrssXZF00Yv&cs=5cb177c873d48bc8",
    series: "The Wheel of Time",
    seriesNumber: "12",
    genres: ["Fantasy", "Fiction", "Adventure"],
    pages: "861",
    shelf: "Read",
    id: "rec1ns3LMYKEkrc4S",
  },
  authors: ["Robert Jordan", "Brandon Sanderson"],
  complexity: "full",
};

export const SimpleComplexity = Template.bind({});
SimpleComplexity.args = {
  book: {
    title: "The Gathering Storm",
    coverImage:
      "https://dl.airtable.com/.attachments/a6e92f7e75d78092c15bc6fd75c4b33e/f025b980/1166599._SY475_.jpg?ts=1652214348&userId=usrW5DzrssXZF00Yv&cs=5cb177c873d48bc8",
    series: "The Wheel of Time",
    seriesNumber: "12",
    genres: ["Fantasy", "Fiction", "Adventure"],
    pages: "861",
    shelf: "Read",
    id: "rec1ns3LMYKEkrc4S",
  },
  authors: ["Robert Jordan", "Brandon Sanderson"],
  complexity: "simple",
};

export const CoverOnly = Template.bind({});
CoverOnly.args = {
  book: {
    title: "The Gathering Storm",
    coverImage:
      "https://dl.airtable.com/.attachments/a6e92f7e75d78092c15bc6fd75c4b33e/f025b980/1166599._SY475_.jpg?ts=1652214348&userId=usrW5DzrssXZF00Yv&cs=5cb177c873d48bc8",
    series: "The Wheel of Time",
    seriesNumber: "12",
    genres: ["Fantasy", "Fiction", "Adventure"],
    pages: "861",
    shelf: "Read",
    id: "rec1ns3LMYKEkrc4S",
  },
  authors: ["Robert Jordan", "Brandon Sanderson"],
  complexity: "coverOnly",
};
