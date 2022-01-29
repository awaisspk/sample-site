import { FC } from "react";
import styles from "./card.module.css";
import Image from "next/image";

type CardProps = {
  img: string;
  title: string;
  count: number;
  work: string;
  color: "blue" | "black";
};

export const Card: FC<CardProps> = ({ img, count, color, work, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          width={230}
          height={230}
          objectFit="cover"
          src={img}
          alt={title}
        />
      </div>
      <div
        className={styles.card}
        style={{
          background: color === "blue" ? "rgb(76, 38, 242)" : "rgba(0,0,0,1)",
          boxShadow:
            color === "blue"
              ? "rgba(76, 38, 242, 0.15) 0px 48px 100px 0px"
              : "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        }}
      >
        <div className={styles.pill}>
          {count}k {work}
        </div>
        <div className={styles.description}>{title}</div>
      </div>
    </div>
  );
};
