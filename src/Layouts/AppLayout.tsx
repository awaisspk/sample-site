import { Header } from "@components/Header";
import styles from "./Applayout.module.css";
import { FC } from "react";

export const AppLayout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};
