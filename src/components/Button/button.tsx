import { FC } from "react";
import classNames from "classnames/bind";
import styles from "./button.module.css";

type ButtonProps = {
  type: "primary" | "secondary" | "ghost" | "bordered" | "tertiary";
};

let cx = classNames.bind(styles);

export const Button: FC<ButtonProps> = ({ type, children }) => {
  var btnClass = cx({
    base: true,
    primary: type === "primary",
    secondary: type === "secondary",
    tertiary: type === "tertiary",
    bordered: type === "bordered",
    ghost: type === "ghost",
  });

  return (
    <div>
      <button className={btnClass}>{children}</button>
    </div>
  );
};
