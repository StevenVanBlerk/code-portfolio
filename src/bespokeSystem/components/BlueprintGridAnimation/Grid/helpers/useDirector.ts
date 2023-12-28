import { useState, useEffect } from "react";

// Define the interface for the data returned by the hook
interface HookData {
  value: number;
  increment: () => void;
}

const initialiseGrid2D = (rows: number, columns: number): any => {
  const grid: any = {};
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const key = `${row}-${column}`;
      grid[key] = { row, column };
    }
  }
  return grid;
};

const initialiseGridNodes = ({
  rowCount,
  columnCount,
  nodeCount,
}: any): any => {
  const nodes: any = {};
  for (let i = 0; i < nodeCount; i++) {
    const nodeId = `node-${i}`;
    // TO-DO: replace this logic
    if (i === 0)
      nodes[nodeId] = {
        row: 0,
        column: 1,
        adjacentNodes: [],
      };
    if (i === 1)
      nodes[nodeId] = {
        row: 1,
        column: 1,
        adjacentNodes: [],
      };
  }
  //To-do: find all adjacent nodes here
  return nodes;
};

// Define the custom hook
const useDirector = ({ columnCount, rowCount }: any): any => {
  // State variable to hold the value
  const initialNodePosition = {
    row: 0,
    column: 0,
    adjacentNodes: [],
  };

  const [grid2D, setGrid2D] = useState<any>(initialiseGrid2D(3, 3));
  const [gridNodes, setGridNodes] = useState<any>(initialiseGridNodes(2));

  const findAdjacentNodes = (nodeId: any) => {
    const adjacentNodes = []; //TO-DO: iterate grid and find adjacant nodes
    return [];
  };

  const updateNodePosition = ({ nodeId, newRow, newColumn }: any) => {
    const oldNodes = JSON.parse(JSON.stringify(gridNodes));
    if (!!newRow) oldNodes[nodeId].row = newRow;
    if (!!newColumn) oldNodes[nodeId].column = newColumn;
  };

  // Return the data as an object
  const director = {
    grid2D,
    gridNodes,
    updateNodePosition,
  };

  return director;
};

export default useDirector;

// SIGN OFF NOTES:
/** busy initialising director with hard coded grid values. Continue this then:
 * - Draw nodes based on where director says points are
 * - Draw lines based on where director says points are
 * - Add basic automated movement
 */
