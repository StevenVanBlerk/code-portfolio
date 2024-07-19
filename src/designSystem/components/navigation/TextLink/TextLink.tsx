import NextImage from "next/image";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  openInNewTab?: boolean;
  hasExternalLinkIcon?: boolean;
} & LinkProps;

const TextLink = ({
  href,
  children,
  className = "",
  openInNewTab,
  hasExternalLinkIcon = false,
}: TextLinkProps) => {
  return (
    <Link
      href={href}
      target={openInNewTab ? "/" : undefined}
      className={`flex w-fit gap-1 align-middle text-2xl ${className}`}
    >
      {hasExternalLinkIcon && (
        <NextImage
          src="/icons/open-external-link.svg"
          width={13}
          height={13}
          alt={`open ${href}`}
        />
      )}
      {children}
    </Link>
  );
};

export default TextLink;
