import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ children, className = "" }: ButtonProps) => {
  return (
    <button
      className={`w-fit rounded-md border-2 bg-white p-1 text-lg text-black ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
