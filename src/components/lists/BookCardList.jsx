import styles from "./bookcardlist.module.scss";
import BookCard from "../cards/BookCard";
import { matchById } from "../../utilities/combineData";

const BookCardList = ({ books, authors }) => (
  <div className={styles.cardList}>
    {books.map((book, i) => {
      let bookAuthors = [];
      book.author.map((author, i) => {
        let authorObject = matchById(authors, author);
        bookAuthors.push({
          last: authorObject.last,
          full: authorObject.fullName,
        });
        return bookAuthors;
      });
      return <BookCard book={book} key={i} authors={bookAuthors} />;
    })}
  </div>
);

export default BookCardList;
