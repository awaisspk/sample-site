import classNames from "classnames/bind";
import styles from "./button.module.css";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  type:
    | "primary"
    | "secondary"
    | "ghost"
    | "bordered"
    | "tertiary"
    | "arrows"
}

let cx = classNames.bind(styles);

export const Button = ({ type, children, ...rest }: Props) => {
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
      <button className={btnClass} {...rest}>
        {children}
      </button>
    </div>
  );
};
