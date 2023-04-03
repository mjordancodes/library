import styles from "./Stats.module.scss";
import Button from "../../controls/button/Button";

const Stats = ({ books, authors, read, toRead, reading }) => (
  <div className={styles.stats}>
    <h3>Library Stats:</h3>
    <p>Books: {books}</p>
    <p>Authors: {authors}</p>
    {/* <h4>Shelves:</h4>
    <div className={styles.shelves}>
      <Button url="/" displayText={`Read: ${read}`} />
      <Button url="/" displayText={`To Read: ${toRead}`} />
      <Button url="/" displayText={`Reading: ${reading}`} />
    </div> */}
  </div>
);

export default Stats;
