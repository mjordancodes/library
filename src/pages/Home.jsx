import { useState, useEffect } from "react";
import { getAllAuthors, getAllBooks } from "../utilities/fetchData";
import BookCardList from "../components/lists/BookCardList";

const HomePage = () => {
  const [Books, setBooks] = useState(null);
  const [Authors, setAuthors] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Books) {
      getAllBooks().then((Books) => {
        setBooks(Books.records);
        setLoading(false);
      });
      getAllAuthors().then((Authors) => {
        setAuthors(Authors.records);
      });
    }
  });

  return (
    <div>
      <h2>All Books</h2>

      {Loading && <p>Loading Books...</p>}

      {!Loading && Books && Authors && (
        <BookCardList books={Books} authors={Authors} />
      )}
    </div>
  );
};

export default HomePage;
