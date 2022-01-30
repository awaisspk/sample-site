import { Button } from "@components/Button";
import classNames from "classnames/bind";
import { MenuIcon } from "@components/icons/menu";
import { SiteLogo } from "@components/Logo";
import { MainNav } from "@components/Nav";
import { Search } from "@components/Search";
import { useState } from "react";
import { useMedia } from "react-use";
import styles from "./header.module.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

let cx = classNames.bind(styles);

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const isWide = useMedia("(min-width: 980px)", true);
  const isMobile = useMedia("(min-width: 580px)", true);

  return (
    <header className={styles.header}>
      <SiteLogo />
      {isWide ? (
        <div className={styles.container}>
          <MainNav />
          <Search />
          <div className={styles.loginButtons}>
            <Button type="ghost">Login</Button>
            <Button type="primary">Sign up</Button>
          </div>
        </div>
      ) : (
        <div className={styles.mobileContainer}>
          {isMobile && <Search />}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger
              className={styles.menuBtn}
              onClick={() => setIsActive(!isActive)}
            >
              <MenuIcon />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className={styles.mobileMenu}>
              <MainNav mobile />

              <div className={styles.loginButtons}>
                <Button type="ghost">Login</Button>
                <Button type="primary">Sign up</Button>
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      )}
    </header>
  );
};
