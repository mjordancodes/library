import { useState, useEffect } from "react";
import { getAllAuthors, getAllOfTable } from "../utilities/fetchData";
import BookCardList from "../components/lists/BookCardList";

const HomePage = () => {
  const [Books, setBooks] = useState(null);
  const [Authors, setAuthors] = useState(null);

  useEffect(() => {
    if (!Books) {
      getAllOfTable("books").then((Books) => {
        setBooks(Books);
      });
    }
    if (!Authors) {
      getAllOfTable("authors").then((Authors) => {
        setAuthors(Authors);
      });
    }
  });

  return (
    <div>
      <h2>All Books</h2>

      {Books && Authors && <BookCardList books={Books} authors={Authors} />}
    </div>
  );
};

export default HomePage;
