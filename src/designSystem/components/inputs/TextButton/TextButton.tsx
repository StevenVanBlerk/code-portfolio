import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

interface ButtonProps<T extends ElementType> {
  as?: T;
  children?: ReactNode;
  className?: string;
}

// Polymorphic component - https://itnext.io/react-polymorphic-components-with-typescript-f7ce72ea7af2
const TextButton = <T extends ElementType = "button">({
  as,
  className = "",
  ...props
}: ButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = as || "button";
  return <Component className={`w-fit text-2xl ${className}`} {...props} />;
};

export default TextButton;
