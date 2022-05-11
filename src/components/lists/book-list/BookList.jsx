import styles from "./BookList.module.scss";
import BookCard from "../../cards/BookCard/BookCard";

const BookCardList = ({ books }) => (
  <div className={styles.cardList}>
    {books.map((book) => {
      return <BookCard book={book} key={book.id} complexity="full" />;
    })}
  </div>
);

export default BookCardList;
