import { SearchIcon } from "@components/icons";
import styles from "./styles.module.css";

export const Search = ({mobile} : {mobile?: boolean}) => {
  return (
    <div className={mobile ? styles.mobileSearch : styles.search}>
      <input type="text" placeholder="search" className={styles.input} />
      <SearchIcon />
    </div>
  );
};
