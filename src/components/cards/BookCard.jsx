import styles from "./bookcard.module.scss";

const BookCard = ({ book, authors }) => (
  <div className={`${styles.bookCard} ${styles.simple}`}>
    {book.coverImage && <img src={book.coverImage[0].url} alt="book cover" />}

    <div className={styles.body}>
      <p className={styles.title}>{book.title}</p>

      {book.series && (
        <p>
          {book.series} #{book.seriesNumber}
        </p>
      )}

      <p className={styles.author}>{authors[0].full}</p>

      <div className={styles.info}>
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
