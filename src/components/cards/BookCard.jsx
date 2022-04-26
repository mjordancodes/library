const BookCard = ({ book, authors }) => (
  <div className="book-card">
    <div className="card-body">
      <p className="book-title">{book.title}</p>

      {book.series && (
        <p className="book-series">
          {book.series} #{book.seriesNumber}
        </p>
      )}

      <p className="book-author">{authors[0].full}</p>

      <ul className="book-genres">
        {book.genres.map((genre, i) => {
          return <li key={i}>{genre}</li>;
        })}
      </ul>

      <p className="book-pages">Pages: {book.pages}</p>
      <p className="book-shelf">Shelf: {book.shelf}</p>
    </div>
  </div>
);

export default BookCard;
