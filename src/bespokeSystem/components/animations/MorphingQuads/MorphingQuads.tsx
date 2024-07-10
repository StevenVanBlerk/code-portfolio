"use client";

import { useEffect, useState } from "react";
import Quad from "./Quad";
import { evaluateTransitionDelay } from "./helpers/animation";
import { MorphingQuadsProps } from "./types/props";

const MorphingQuads = ({
  canvasWidth,
  canvasHeight,
  columnCount,
  isOverflowing = false,
  transitionProps = {},
  styleProps = {},
  isInitialisedExpanded = true,
  isAnimated = true,
  animationOrigin = "center",
  isInDebugMode = false,
  isInteractive = true,
}: MorphingQuadsProps) => {
  const { frequency = 6000, transitionDuration = 1 } = transitionProps;
  const {
    gap = 8,
    scaleFactor = 3,
    rotationCount = 1,
    fill = "#fff",
    borderRadius = 0,
  } = styleProps;

  const [isExpanded, setIsExpanded] = useState(isInitialisedExpanded);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimated) setIsExpanded((prevState) => !prevState);
    }, frequency);
    return () => clearInterval(interval);
  }, [isAnimated]);

  const columnMaxWidth = Math.floor(canvasWidth / (columnCount + 0.5)); //0.5 accounts for offset rows
  const rowMaxHeight = columnMaxWidth;

  const rowCount = Math.floor(canvasHeight / rowMaxHeight) * 2 - 1; //TO-DO: confirm if -1 is always needed and correct

  const actualRowCount = rowCount + (isOverflowing ? 3 : 0);
  const actualColumnCount = columnCount + (isOverflowing ? 1 : 0);

  let quadPropsSet = [];
  for (let i = 0; i < actualRowCount; i++) {
    for (let j = 0; j < actualColumnCount; j++) {
      const isOffset = i % 2 === 1;

      const x = j * columnMaxWidth + (isOffset ? columnMaxWidth / 2 : 0);
      const y = (i * rowMaxHeight) / 2;

      const transitionDelay = evaluateTransitionDelay(
        animationOrigin,
        actualColumnCount,
        actualRowCount,
        isOffset,
        j,
        i,
      );

      const quadProps = {
        key: `${i}-${j}`,
        isExpanded,
        x,
        y,
        transitionDelay,
      };
      quadPropsSet.push(quadProps);
    }
  }

  return (
    <>
      <div
        style={{
          width: canvasWidth,
          height: canvasHeight,
          transform: isOverflowing
            ? `translateX(-${columnMaxWidth / 2}px) translateY(-${columnMaxWidth / 2}px)`
            : undefined,
        }}
      >
        <div>
          {quadPropsSet.map(({ key, isExpanded, x, y, transitionDelay }) => (
            <Quad
              key={key}
              isExpanded={isExpanded}
              cellWidth={columnMaxWidth}
              x={x}
              y={y}
              gap={gap}
              transitionDelay={transitionDelay}
              transitionDuration={transitionDuration}
              isInteractive={isInteractive}
              scaleFactor={scaleFactor}
              rotationCount={rotationCount}
              fill={fill}
              borderRadius={borderRadius}
              isInitialisedExpanded={isInitialisedExpanded}
              isInDebugMode={isInDebugMode}
            />
          ))}
        </div>
      </div>
      {isInDebugMode && (
        <button
          className="absolute left-4 top-4"
          onClick={() => setIsExpanded((prevState) => !prevState)}
        >
          {isExpanded ? "Constrict" : "Expand"}
        </button>
      )}
    </>
  );
};

export default MorphingQuads;
