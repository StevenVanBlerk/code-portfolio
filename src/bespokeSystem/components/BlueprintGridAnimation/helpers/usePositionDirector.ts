import { useState, useEffect } from "react";

const initialiseGrid2D = (rowCount: number, columnCount: number): any => {
  //TO-DO: use this same logic in svg renderer
  const grid: any = {};
  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
      const key = `${rowIndex}-${columnIndex}`;
      grid[key] = { rowIndex, columnIndex };
    }
  }
  return grid;
};

const initialiseGridNodes = ({
  rowCount,
  columnCount,
  nodeCount,
}: any): any => {
  const nodes: any = [];
  const stepCount = 1000;
  for (let nodeIndex = 0; nodeIndex < nodeCount; nodeIndex++) {
    const initialX = Math.floor(Math.random() * columnCount);
    const initialY = Math.floor(Math.random() * rowCount);
    const sequence = [{ x: initialX, y: initialY }];
    let previousStep = sequence[0];

    for (let step = 1; step < stepCount; step++) {
      const randomAxisNum = Math.floor(Math.random() * 3);
      const axisChanged =
        randomAxisNum === 0 ? "none" : randomAxisNum === 1 ? "x" : "y";

      const randomDistance = Math.floor(Math.random() * 5) - 2; // random int from -2 to 2

      const xDiff = axisChanged === "x" ? randomDistance : 0;
      const yDiff = axisChanged === "y" ? randomDistance : 0;
      const newX =
        previousStep.x + xDiff < 0
          ? 0
          : previousStep.x + xDiff > columnCount - 1
          ? columnCount - 1
          : previousStep.x + xDiff;
      const newY =
        previousStep.y + yDiff < 0
          ? 0
          : previousStep.y + yDiff > rowCount - 1
          ? rowCount - 1
          : previousStep.y + yDiff;

      sequence.push({ x: newX, y: newY });
      previousStep = sequence[sequence.length - 1];
    }
    const nodeId = `node-${nodeIndex}`;
    const node = {
      id: nodeId,
      sequence,
    };

    nodes[nodeId] = node;
  }
  return nodes;
};

// Define the custom hook
const usePositionDirector = ({
  columnCount,
  rowCount,
  nodeCount,
}: any): any => {
  const [grid2D, setGrid2D] = useState<any>(
    initialiseGrid2D(columnCount, columnCount)
  );
  const [gridNodes, setGridNodes] = useState<any>(
    initialiseGridNodes({ nodeCount, columnCount, rowCount })
  );

  const positionDirector = {
    grid2D,
    gridNodes,
    rowCount,
    columnCount,
  };

  return positionDirector;
};

export default usePositionDirector;

// SIGN OFF NOTES:
/** busy initialising positionDirector with hard coded grid values. Continue this then:
 * - Draw nodes based on where positionDirector says points are
 * - Draw lines based on where positionDirector says points are
 * - Add basic automated movement
 */
