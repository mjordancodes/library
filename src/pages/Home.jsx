import { useState, useEffect } from "react";
import { getAllOfTable, getAllBooksSorted } from "../utilities/fetchData";
import BookList from "../components/lists/book-list/BookList";
import { matchById } from "../utilities/combineData";
import Stats from "../components/displays/stats/Stats";

const HomePage = () => {
  const [Books, setBooks] = useState(null);
  const [Authors, setAuthors] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (!Books) {
      getAllBooksSorted().then((Books) => {
        let formattedBooks = [];
        Books.map((book) => {
          // pull out the data needed for each book
          let bookObject = {};
          bookObject.title = book["_rawJson"].fields.title;
          if (book["_rawJson"].fields.coverImage) {
            bookObject.coverImage = book["_rawJson"].fields.coverImage[0].url;
          } else {
            bookObject.coverImage = "";
          }
          bookObject.series = book["_rawJson"].fields.series;
          bookObject.seriesNumber = book["_rawJson"].fields.seriesNumber;
          bookObject.genres = book["_rawJson"].fields.genres;
          bookObject.pages = book["_rawJson"].fields.pages;
          bookObject.shelf = book["_rawJson"].fields.shelf;
          bookObject.id = book["_rawJson"].id;
          bookObject.authorIds = book["_rawJson"].fields.author;
          bookObject.authors = [];

          formattedBooks.push(bookObject);

          return formattedBooks;
        });
        setBooks(formattedBooks);
      });
    }
    if (!Authors) {
      getAllOfTable("authors").then((Authors) => {
        setAuthors(Authors);
      });
    }
    if (Books && Authors) {
      Books.map((book) => {
        let bookAuthors = [];
        book.authorIds.map((author) => {
          let authorObject = matchById(Authors, author);
          bookAuthors.push(authorObject["_rawJson"].fields.fullName);
          return bookAuthors;
        });
        book.authors = bookAuthors;
        return book;
      });
      setLoading(false);
    }
  }, [Books, Authors]);

  return (
    <div>
      <h2>All Books</h2>

      {Loading && <p>Loading data...</p>}

      {!Loading && (
        <div>
          <Stats
            books={Books.length}
            authors={Authors.length}
            read="153"
            toRead="35"
            reading="1"
          />
          <BookList books={Books} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
