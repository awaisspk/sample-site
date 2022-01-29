import { Button } from "@components/Button";
import { MainNav } from "@components/Nav";
import { Search } from "@components/Search";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <MainNav />
        <Search />
        <div className={styles.loginButtons}>
          <Button type="ghost">Login</Button>
          <Button type="primary">Sign up</Button>
        </div>
      </div>
    </header>
  );
};
