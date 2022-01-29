import { Tab } from "@components/Tabs";
import styles from "./skills.module.css";

export const Skills = () => {
  return (
    <section className={styles.container}>
      <div className={styles.skills}>
        <h2 className={styles.title}>Top skills categories</h2>
        <Tab />
      </div>
    </section>
  );
};
