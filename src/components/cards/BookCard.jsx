import styles from "./bookcard.module.scss";

const BookCard = ({ book, authors }) => (
  <div className={`${styles.bookCard} ${styles.full}`}>
    <div className={styles.imgContainer}>
      {book.coverImage && <img src={book.coverImage[0].url} alt="book cover" />}
    </div>

    <div className={styles.cardHeader}>
      <p className={styles.title}>{book.title}</p>
    </div>

    <div className={styles.cardBody}>
      {book.series && (
        <p>
          {book.series} #{book.seriesNumber}
        </p>
      )}

      <p className={styles.author}>
        {authors.map((author, i) => {
          return author.fullName;
        })}
        AUTHOR NAME
      </p>

      <div className={styles.extraInfo}>
        {book.genres && (
          <ul className={`${styles.genreList} no-style-list`}>
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
