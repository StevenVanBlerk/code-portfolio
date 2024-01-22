import { motion } from "framer-motion";

const BackgroundGridLines = ({
  rowCount,
  columnCount,
  gridGapSize,
}: any): any => {
  const lines = [];
  for (let i = 0; i < rowCount; i++) {
    const horizontalLine = {
      x1: 0,
      x2: columnCount * gridGapSize - gridGapSize,
      y1: i * gridGapSize,
      y2: i * gridGapSize,
      key: `horizontal-line-${i}`,
    };
    lines.push(horizontalLine);
  }
  for (let i = 0; i < columnCount; i++) {
    const verticalLine = {
      y1: 0,
      y2: rowCount * gridGapSize - gridGapSize,
      x1: i * gridGapSize,
      x2: i * gridGapSize,
      key: `vertical-line-${i}`,
    };
    lines.push(verticalLine);
  }

  return lines.map((line, i) => {
    return (
      <line
        key={line.key}
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        stroke="#222"
      />
    );
  });
};

export default BackgroundGridLines;
