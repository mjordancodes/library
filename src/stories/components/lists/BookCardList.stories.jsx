import React from "react";

import BookCardList from "../../../components/lists/book-list/BookList";

export default {
  title: "Book List",
  component: BookCardList,
};

const Template = (args) => <BookCardList {...args} />;
