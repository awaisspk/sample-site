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

export const MainNav = ({ mobile }: { mobile?: boolean }) => {
  return (
    <nav className={styles.nav}>
      <ul className={mobile ? styles.mobile : styles.linkList}>
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
