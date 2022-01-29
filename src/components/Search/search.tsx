import { SearchIcon } from "@components/icons";
import styles from "./styles.module.css";

export const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="search" className={styles.input} />
      <SearchIcon />
    </div>
  );
};
