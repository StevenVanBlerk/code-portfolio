import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const TextButton = ({
  children,
  className = "",
  ...buttonProps
}: ButtonProps) => {
  return (
    <button className={`w-fit text-2xl ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

export default TextButton;
