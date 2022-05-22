import styles from "./Button.module.scss";

const Stats = ({ url, displayText }) => (
  <a href={url} className={styles.button}>
    {displayText}
  </a>
);

export default Stats;
