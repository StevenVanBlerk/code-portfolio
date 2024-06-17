import React, { useEffect, useState } from "react";
import { useAnimate } from "framer-motion";

type QuadProps = {
  isExpanded: boolean;
  cellWidth: number;
  x: number;
  y: number;
  gap: number;
  scaleFactor: number;
  rotationCount: number;
  fill: string;
  borderRadius: number;
  transitionDelay: number;
  transitionDuration: number;
  isInteractive: boolean;
  isInitialisedExpanded: boolean;
  isInDebugMode: boolean;
};

const Quad = ({
  isExpanded,
  cellWidth,
  x,
  y,
  gap,
  scaleFactor,
  rotationCount,
  fill,
  borderRadius,
  transitionDelay,
  transitionDuration,
  isInteractive,
  isInitialisedExpanded,
  isInDebugMode,
}: QuadProps) => {
  const [scope, animate] = useAnimate();
  const [isLocalExpanded, setIsLocalExpanded] = useState(isInitialisedExpanded);
  const [isForcingAnimation, setIsForcingAnimation] = useState(false);

  const squareMaxWidth = cellWidth * Math.sqrt(0.5) - gap / 2;
  const squareMinWidth = squareMaxWidth / scaleFactor;

  const degreesRotated = Math.floor(rotationCount) * 90;

  useEffect(() => {
    // setIsLocalExpanded(isExpanded);
    setIsLocalExpanded((prevState) => !prevState);
  }, [isExpanded]);

  useEffect(() => {
    // TO-DO: experiment with adding a border-radius while animating
    if (isLocalExpanded) {
      animate(
        scope.current,
        {
          width: squareMaxWidth,
          height: squareMaxWidth,
          rotate: 0,
        },
        {
          ease: "easeInOut",
          duration: transitionDuration,
          delay: isForcingAnimation ? 0 : transitionDelay,
        },
      );
    } else {
      animate(
        scope.current,
        {
          width: squareMinWidth,
          height: squareMinWidth,
          rotate: degreesRotated,
        },
        {
          ease: "easeInOut",
          duration: transitionDuration,
          delay: isForcingAnimation ? 0 : transitionDelay,
        },
      );
    }

    setIsForcingAnimation(false);
  }, [isLocalExpanded]);

  return (
    <button
      onTouchStartCapture={() => {
        setIsForcingAnimation(true);
        setIsLocalExpanded((prevState) => !prevState);
      }}
      onMouseEnter={() => {
        setIsForcingAnimation(true);
        setIsLocalExpanded((prevState) => !prevState);
      }}
      onClick={() => {
        setIsForcingAnimation(true);
        setIsLocalExpanded((prevState) => !prevState);
      }}
      disabled={!isInteractive}
      style={{
        left: x,
        top: y,
        width: cellWidth * Math.sqrt(0.5),
        height: cellWidth * Math.sqrt(0.5),
        border: isInDebugMode
          ? isLocalExpanded
            ? "1px dashed red"
            : "1px dashed yellow"
          : "none",
      }}
      className="absolute -rotate-45 place-content-center"
    >
      <div
        ref={scope}
        style={{
          background: fill,
          width: isInitialisedExpanded ? squareMaxWidth : squareMinWidth,
          height: isInitialisedExpanded ? squareMaxWidth : squareMinWidth,
          borderRadius: borderRadius,
          // marginLeft: "auto", // effectively setting transform-origin to right
          margin: "auto",
          color: isLocalExpanded ? "red" : "yellow",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        {isInDebugMode && transitionDelay}
      </div>
    </button>
  );
};

export default Quad;
