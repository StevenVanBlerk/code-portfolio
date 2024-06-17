import Link from "next/link";
import React, { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button
      style={{
        fontSize: "26px",
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </button>
  );
};

type StyledLinkProps = {
  href: string;
  children: ReactNode;
  openInNewTab?: boolean;
};

const StyledLink = ({ href, children, openInNewTab }: StyledLinkProps) => {
  const isInternal = href?.[0] === "/";
  return (
    <Link
      href={href}
      target={openInNewTab ? "/" : undefined}
      style={{
        fontSize: "26px",
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "fit-content",
      }}
    >
      {isInternal && "/"}
      {children}
    </Link>
  );
};

const Copy = () => {
  return (
    <div
      style={{
        fontFamily: "Minimalist",
        textAlign: "right",
      }}
    >
      <h1
        style={{
          fontSize: "70px",
        }}
      >
        Steven <span className="whitespace-nowrap">van Blerk</span>
      </h1>
      <h2
        style={{
          fontSize: "36px",
          marginTop: "-30px",
          marginBottom: "24px",
        }}
      >
        Frontend engineer
      </h2>
      <StyledLink
        href="https://github.com/StevenVanBlerk/code-portfolio"
        openInNewTab
      >
        Github
      </StyledLink>
      <StyledLink href="/storybook">Storybook</StyledLink>
      <StyledLink href="/cypress">Cypress</StyledLink>
      <StyledLink href="/creative-coding">Creative coding</StyledLink>
      <StyledLink href="/about">About me</StyledLink>
      <Button>Download CV</Button>
      <Button>Edit animation</Button>
    </div>
  );
};

export default Copy;
