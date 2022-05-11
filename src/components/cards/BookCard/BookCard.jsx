import styles from "./bookcard.module.scss";
import clsx from "clsx";

const BookCard = ({ book, authors, complexity }) => (
  <div
    className={clsx(
      styles.bookCard,
      complexity === "full" && styles.full,
      complexity === "simple" && styles.simple,
      complexity === "coverOnly" && styles.coverOnly
    )}
    key={book.id}
  >
    <div className={styles.imgContainer}>
      {book.coverImage && <img src={book.coverImage} alt="book cover" />}
    </div>

    <div className={styles.cardHeader}>
      <p className={styles.title}>{book.title}</p>
      {book.series && (
        <p>
          {book.series} #{book.seriesNumber}
        </p>
      )}
    </div>

    <div className={styles.cardBody}>
      <p className={styles.author}>
        {authors.map((author, i) => {
          return <span key={i}>{author}</span>;
        })}
      </p>

      <div className={styles.extraInfo}>
        {book.genres && (
          <ul className={styles.genreList}>
            {book.genres.map((genre, i) => {
              return <li key={i}>{genre}</li>;
            })}
          </ul>
        )}

        {book.pages && <p>Pages: {book.pages}</p>}
        {book.shelf && <p>Shelf: {book.shelf}</p>}
      </div>
    </div>
  </div>
);

export default BookCard;
