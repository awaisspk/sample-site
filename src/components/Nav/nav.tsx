import { SiteLogo } from "@components/Logo";
import Link from "next/link";
import styles from "./nav.module.css";

const links = [
  {
    url: "/",
    name: "Find talent",
  },
  {
    url: "/",
    name: "Find work",
  },
  {
    url: "/",
    name: "Why UpTechHunt",
  },
];

export const MainNav = () => {
  return (
    <nav className={styles.nav}>
      <SiteLogo />
      <ul className={styles.linkList}>
        {links.map((link, i) => (
          <li key={link.name + i}>
            <Link href={link.url}>
              <a className={styles.link}>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
