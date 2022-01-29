import styles from "./logo.module.css";

export const SiteLogo = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.dark}>UP</span>
      <span>TECHHUNT</span>
    </div>
  );
};
