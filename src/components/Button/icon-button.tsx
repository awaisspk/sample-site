export const IconBtn = ({
  children,
  ...rest
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return <button {...rest}>{children}</button>;
};
