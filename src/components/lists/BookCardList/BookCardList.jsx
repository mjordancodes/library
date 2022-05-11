import styles from "./bookcardlist.module.scss";
import BookCard from "../../cards/BookCard/BookCard";
import { matchById } from "../../../utilities/combineData";

const BookCardList = ({ books, authors }) => (
  <div className={styles.cardList}>
    {books.map((book) => {
      // pull out the data needed for each book
      let bookObject = {};
      bookObject.title = book["_rawJson"].fields.title;
      bookObject.coverImage = book["_rawJson"].fields.coverImage[0].url;
      bookObject.series = book["_rawJson"].fields.series;
      bookObject.seriesNumber = book["_rawJson"].fields.seriesNumber;
      bookObject.genres = book["_rawJson"].fields.genres;
      bookObject.pages = book["_rawJson"].fields.pages;
      bookObject.shelf = book["_rawJson"].fields.shelf;
      bookObject.id = book["_rawJson"].id;

      // match with data from the authors list
      let bookAuthors = [];
      book["_rawJson"].fields.author.map((author, i) => {
        let authorObject = matchById(authors, author);
        bookAuthors.push(authorObject["_rawJson"].fields.fullName);
        return bookAuthors;
      });

      return (
        <BookCard
          book={bookObject}
          key={bookObject.id}
          authors={bookAuthors}
          complexity="full"
        />
      );
    })}
  </div>
);

export default BookCardList;
