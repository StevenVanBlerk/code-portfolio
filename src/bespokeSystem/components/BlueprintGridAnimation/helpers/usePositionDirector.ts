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
  for (let i = 0; i < nodeCount; i++) {
    const nodeId = `node-${i}`;
    const node = {
      id: nodeId,
      adjacentNodes: [],
      sequence: [{ x: 1, y: 1 }],
    };
    // TO-DO: replace this logic
    if (i === 0) nodes[nodeId] = node;
    if (i === 1)
      nodes[nodeId] = {
        ...node,
        sequence: [
          { x: 2, y: 1 },
          { x: 2, y: 2 },
          { x: 2, y: 2 },
          { x: 0, y: 2 },
          { x: 0, y: 0 },
        ],
      };
  }
  //To-do: find all adjacent nodes here
  return nodes;
};

// Define the custom hook
const usePositionDirector = ({ columnCount, rowCount }: any): any => {
  const [grid2D, setGrid2D] = useState<any>(initialiseGrid2D(3, 3));
  const [gridNodes, setGridNodes] = useState<any>(
    initialiseGridNodes({ nodeCount: 2 })
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
