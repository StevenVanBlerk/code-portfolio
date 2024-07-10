"use client";

import { TextButton } from "@/designSystem";
import Button from "@/designSystem/components/inputs/Button";
import TextLink from "@/designSystem/components/navigation/TextLink";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavBar = () => {
  const pathname = usePathname();
  const isOnHomePage = pathname === "/";

  const [isExpanded, setIsExpanded] = useState(isOnHomePage ? true : true);
  const toggleNavBar = () => setIsExpanded((prevState) => !prevState);

  const currentPathClassName = "underline";

  // const expandedWrapperClassNames = "translate-y-0";
  // const contractedWrapperClassNames = "-translate-y-full";
  const expandedWrapperClassNames = "h-full translate-y-0";
  const contractedWrapperClassNames = "h-8 -translate-y-full";

  const wrapperClassName = `overflow-hidden duration-500 ${isExpanded ? expandedWrapperClassNames : contractedWrapperClassNames}`;
  useEffect(() => {
    if (!isOnHomePage) {
      setIsExpanded(true);
    }
  }, [pathname]);

  return (
    <div
      className={
        "grid grid-cols-1 justify-items-center overflow-hidden text-center " +
        wrapperClassName
      }
    >
      <div className={isExpanded ? "h-full" : "h-0 overflow-hidden"}>
        <header>
          <TextLink href="/">
            <h1 className="text-nowrap">
              Steven <span>van Blerk</span>
            </h1>
          </TextLink>
          <h2>Frontend engineer</h2>
        </header>

        <nav className="mt-5">
          <ul className="flex justify-center gap-4">
            <li>
              <TextLink
                href="/demos"
                className={pathname === "/demos" ? currentPathClassName : ""}
              >
                Demo projects
              </TextLink>
            </li>
            <li>
              <TextLink
                href="/storybook"
                className={
                  pathname === "/storybook" ? currentPathClassName : ""
                }
              >
                Storybook
              </TextLink>
            </li>
            <li>
              <TextLink
                href="/cypress"
                className={pathname === "/cypress" ? currentPathClassName : ""}
              >
                Cypress
              </TextLink>
            </li>
            <li>
              <TextLink
                href="/creativeCoding"
                className={
                  pathname === "/creativeCoding" ? currentPathClassName : ""
                }
              >
                Creative coding
              </TextLink>
            </li>
            <li>
              <TextLink
                href="/about"
                className={pathname === "/about" ? currentPathClassName : ""}
              >
                About me
              </TextLink>
            </li>
          </ul>
        </nav>

        <Button className="mt-2">Download CV</Button>
      </div>
      {isOnHomePage && (
        <TextButton
          aria-label={isExpanded ? "Close navigation" : "Open navigation"}
          className={`mt-3 ${isExpanded ? "rotate-0" : "rotate-180"}`}
          onClick={toggleNavBar}
        >
          <NextImage
            src="/icons/chevron-up.svg"
            width={40}
            height={40}
            alt={isExpanded ? "Close navigation" : "Open navigation"}
          />
        </TextButton>
      )}
    </div>
  );
};

export default NavBar;
