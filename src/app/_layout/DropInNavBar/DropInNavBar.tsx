"use client";

import { TextButton } from "src/designSystem";
import Button from "src/designSystem/components/inputs/Button";
import TextLink from "src/designSystem/components/navigation/TextLink";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MotionConfig, motion, useAnimationControls } from "framer-motion";

const DropInNavBar = () => {
  const pathname = usePathname();
  const isOnHomePage = pathname === "/";

  const [desiredPath, setDesiredPath] = useState(pathname);

  const [isExpanded, setIsExpanded] = useState(isOnHomePage ? false : true);

  const toggleNavBar = () => setIsExpanded((prevState) => !prevState);

  const currentPathClassName = "underline";

  useEffect(() => {
    if (!isOnHomePage) {
      setIsExpanded(true);
    }
  }, [pathname]);

  const tweenConfig = {
    type: "tween",
    duration: 0.5,
  };

  const controls = useAnimationControls(); // TO-DO: rename

  useEffect(() => {
    if (!isExpanded) {
      controls.start(
        { y: [0, -15] },
        {
          duration: 1,
          delay: 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      );
    } else {
      controls.set({ y: 0 }); // resetting y before stopping animation
      controls.stop();
    }
  }, [isExpanded]);
  return (
    <MotionConfig transition={tweenConfig}>
      <div className="mx-auto grid w-fit grid-cols-1 justify-items-center text-center">
        <motion.div
          animate={isExpanded ? "expanded" : "closed"}
          // TO-DO: migrate motion css to tailwind https://www.youtube.com/watch?v=xSuxsfn13xg
          initial={
            isExpanded
              ? {
                  marginTop: "0px",
                  opacity: 100,
                }
              : {
                  marginTop: "-250px",
                  opacity: 0,
                }
          }
          variants={{
            expanded: {
              marginTop: "0px",
              opacity: 100,
            },
            closed: {
              marginTop: "-260px",
              opacity: 0,
            },
          }}
        >
          <nav>
            <TextLink
              className="mx-auto mt-4"
              href="/"
              onClick={() => setDesiredPath("/")}
            >
              <header>
                <h1 className="text-nowrap">
                  Steven <span>van Blerk</span>
                </h1>
                <h2>Frontend engineer</h2>
              </header>
            </TextLink>
            <ul className="mt-5 flex justify-center">
              <li
                className={
                  desiredPath === "/codeSamples" ? currentPathClassName : ""
                }
              >
                <TextLink
                  className="p-2"
                  href="/codeSamples"
                  onClick={() => setDesiredPath("/codeSamples")}
                >
                  Code samples
                </TextLink>
              </li>

              <li
                className={desiredPath === "/about" ? currentPathClassName : ""}
              >
                <TextLink
                  className="p-2"
                  href="/about"
                  onClick={() => setDesiredPath("/about")}
                >
                  About me
                </TextLink>
              </li>
            </ul>
          </nav>

          <Button className="mt-6">Download CV</Button>
        </motion.div>

        {isOnHomePage && (
          <TextButton
            as={motion.button}
            className="mt-3 p-1"
            animate={isExpanded ? "expanded" : "closed"}
            initial={
              isExpanded
                ? {
                    rotateZ: 0,
                  }
                : { rotateZ: 180 }
            }
            variants={{
              expanded: { rotateZ: 0 },
              closed: { rotateZ: 180 },
            }}
            onClick={toggleNavBar}
            aria-label={isExpanded ? "Close navigation" : "Open navigation"}
          >
            <motion.div animate={controls}>
              <NextImage
                src="/icons/chevron-up.svg"
                width={40}
                height={40}
                alt={isExpanded ? "Close icon" : "Open icon"}
              />
            </motion.div>
          </TextButton>
        )}
      </div>
    </MotionConfig>
  );
};

export default DropInNavBar;
