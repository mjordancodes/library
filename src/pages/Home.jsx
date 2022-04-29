import { useState, useEffect } from "react";
import { getAllOfTable } from "../utilities/fetchData";
import BookCardList from "../components/lists/BookCardList";

const HomePage = () => {
  const [Books, setBooks] = useState(null);
  const [Authors, setAuthors] = useState(null);
  const [Loading, setLoading] = useState(true);

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
    if (Books && Authors) {
      setLoading(false);
    }
  });

  return (
    <div>
      <h2>All Books</h2>

      {Loading && <p>Loading data...</p>}

      {!Loading && <BookCardList books={Books} authors={Authors} />}
    </div>
  );
};

export default HomePage;
