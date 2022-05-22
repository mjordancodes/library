import styles from "./Stats.module.scss";
import BookCard from "../../cards/BookCard/BookCard";

const Stats = ({ books, authors, read, toRead, reading, currentlyReading }) => (
  <aside>
    <h3>Library Stats:</h3>
    <p>Total Books Shown: {books}</p>
    <p>Total Authors Shown: {authors}</p>
    <p>Books Read: {read}</p>
    <p>Books To Read: {toRead}</p>
    <p>Books Reading: {reading}</p>
    <p>
      Currently Reading:{" "}
      <BookCard book={currentlyReading} complexity="noCover" />
    </p>
  </aside>
);

export default Stats;
