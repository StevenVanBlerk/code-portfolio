import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  openInNewTab?: boolean;
} & LinkProps;

const TextLink = ({
  href,
  children,
  className = "",
  openInNewTab,
}: TextLinkProps) => {
  return (
    <Link
      href={href}
      target={openInNewTab ? "/" : undefined}
      className={`text-2xl ${className}`}
    >
      {children}
    </Link>
  );
};

export default TextLink;
