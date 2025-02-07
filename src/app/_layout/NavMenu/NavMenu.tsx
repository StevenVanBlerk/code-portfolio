"use client";

import { Page } from "src/app/types";
import Button from "src/designSystem/components/inputs/Button";
import TextLink from "src/designSystem/components/navigation/TextLink";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const pathname = usePathname();

  const initialPage: Page =
    pathname === "/"
      ? "HOME"
      : pathname === "/codeSamples"
        ? "CODE_SAMPLES"
        : pathname === "/about"
          ? "ABOUT_ME"
          : "";

  const [desiredPage, setDesiredPage] = useState<Page>(initialPage);

  const currentPathClassName = "underline";

  const circleRadius = "810px";
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `1fr ${circleRadius} 1fr`,
      }}
      className="h-svh"
    >
      <div className="my-auto h-fit justify-items-end text-right">
        <header>
          <h1
            className="text-nowrap"
            style={{
              fontSize: "36px",
              marginRight: "-40px",
            }}
          >
            Steven van Blerk
          </h1>
          <h2
            style={{
              fontSize: "18px",
              marginRight: "-37px",
            }}
          >
            Frontend engineer
          </h2>
        </header>

        <nav>
          <ul className="flex flex-col justify-end">
            <li
              style={{
                marginLeft: "auto",
                marginRight: "-15px",
                width: "fit-content",
              }}
              className={
                desiredPage === "CODE_SAMPLES" ? currentPathClassName : ""
              }
            >
              <TextLink
                className="p-2"
                href="/codeSamples"
                onClick={() => setDesiredPage("CODE_SAMPLES")}
              >
                Code samples
              </TextLink>
            </li>

            <li
              style={{
                marginLeft: "auto",
                marginRight: "-15px",
                width: "fit-content",
              }}
              className={desiredPage === "ABOUT_ME" ? currentPathClassName : ""}
            >
              <TextLink
                className="p-2"
                href="/about"
                onClick={() => setDesiredPage("ABOUT_ME")}
              >
                About me
              </TextLink>
            </li>
          </ul>
        </nav>
        <Button className="mt-6">Download CV</Button>
      </div>
    </div>
  );
};

export default NavBar;
