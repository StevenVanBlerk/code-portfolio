"use client";
import { motion } from "framer-motion";
import { moveCircle, drawGridLine } from "./helpers/motionVariants";
import useDirector from "./helpers/useDirector";

const Grid = ({ frameWidth, frameHeight }: any) => {
  const framePadding = 0; //20; //px
  const effectiveFrameHeight = frameHeight - framePadding; //px
  const effectiveFrameWidth = frameWidth - framePadding; //px

  const gapSize = 200;
  const columnCount = Math.ceil(effectiveFrameWidth / 200);
  const rowCount = Math.ceil(effectiveFrameHeight / 200);
  const director = useDirector(3, 3);
  console.log("director", { director });

  const lines = [];
  for (let i = 0; i < rowCount; i++) {
    const horizontalLine = {
      x1: "0%",
      x2: "100%",
      y1: i * gapSize,
      y2: i * gapSize,
      key: `horizontal-line-${i}`,
    };
    lines.push(horizontalLine);
  }
  for (let i = 0; i < columnCount; i++) {
    const verticalLine = {
      y1: "0%",
      y2: "100%",
      x1: i * gapSize,
      x2: i * gapSize,
      key: `vertical-line-${i}`,
    };
    lines.push(verticalLine);
  }
  console.log("Grid", {
    lines,
    rowCount,
    columnCount,
    effectiveFrameHeight,
    effectiveFrameWidth,
    framePadding,
    frameHeight,
    frameWidth,
    gapSize,
  });

  return (
    <div style={{ border: "1px dashed red" }}>
      <motion.svg
        width={frameWidth}
        height={frameHeight}
        viewBox={`0 0 ${frameWidth} ${frameHeight}`}
        initial="hidden"
        animate="visible"
      >
        {lines.map((line, i) => {
          return (
            <motion.line
              key={line.key}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#00cc88"
              custom={{ lineIndex: i }}
              variants={drawGridLine}
            />
          );
        })}
        <motion.circle
          cy="50%"
          r="10"
          stroke="#00f"
          fill="#00f"
          variants={moveCircle}
          custom={{ cxInitial: "20%", cxFinal: "80%" }}
        />
      </motion.svg>
    </div>
  );
};

export default Grid;
