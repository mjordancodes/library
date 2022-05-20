import React from "react";
import BookCardList from "../../../components/lists/book-list/BookList";
import { bookListFullSeries } from "../../mock-data";

export default {
  title: "Book List",
  component: BookCardList,
};

const Template = (args) => <BookCardList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  books: bookListFullSeries,
};

let bookListLengthOne = bookListFullSeries.slice(13);
export const LengthOne = Template.bind({});
LengthOne.args = {
  books: bookListLengthOne,
};

let bookListLengthThree = bookListFullSeries.slice(11);
export const LengthThree = Template.bind({});
LengthThree.args = {
  books: bookListLengthThree,
};
