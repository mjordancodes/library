import styles from "./bookcardlist.module.scss";
import BookCard from "../cards/BookCard";
import { matchById } from "../../utilities/combineData";

const BookCardList = ({ books, authors }) => (
  <div className={styles.cardList}>
    {books.map((book, i) => {
      let bookAuthors = [];
      book.fields.author.map((author, i) => {
        let authorObject = matchById(authors, author);
        bookAuthors.push({
          first: authorObject.fields.first,
          last: authorObject.fields.last,
          full: authorObject.fields.fullName,
        });
        return bookAuthors;
      });
      return <BookCard book={book.fields} key={i} authors={bookAuthors} />;
    })}
  </div>
);

export default BookCardList;
