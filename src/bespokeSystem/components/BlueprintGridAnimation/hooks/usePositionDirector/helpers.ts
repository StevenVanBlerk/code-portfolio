import {
  randomArrayEntry,
  randomArrayStep,
  randomInteger,
} from "@/designSystem/utilities/randomGenerators";

export const initialiseGrid2D = (
  rowCount: number,
  columnCount: number
): any => {
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

export const initialiseGridNodes = ({
  rowCount,
  columnCount,
  nodeCount,
  stepCount,
}: any): any => {
  const nodes: any = [];

  const allowedRadiusValues = [1, 2, 3, 4];
  for (let nodeIndex = 0; nodeIndex < nodeCount; nodeIndex++) {
    const initialRadius = randomArrayEntry(allowedRadiusValues);

    const initialX = randomInteger({ min: 0, max: columnCount - 1 });
    const initialY = randomInteger({ min: 0, max: rowCount - 1 });
    const sequence = [
      {
        x: initialX,
        y: initialY,
        r: initialRadius.entry,
        initialDelay: randomInteger({ min: 0, max: 5 }),
      },
    ];
    let previousStep = sequence[0];

    for (let step = 1; step < stepCount; step++) {
      const displacementAxis = randomArrayEntry(["none", "x", "y"]).entry;
      const randomDistance = randomInteger({ min: -4, max: 4 });

      const xDiff = displacementAxis === "x" ? randomDistance : 0;
      const yDiff = displacementAxis === "y" ? randomDistance : 0;
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

      const newRadius = randomArrayStep({
        array: allowedRadiusValues,
        currentIndex: initialRadius.index,
      }).entry;

      sequence.push({
        x: newX,
        y: newY,
        r: newRadius,
        initialDelay: previousStep.initialDelay,
      });
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

const calculatePathLength = ({ x1, y1, x2, y2 }: any) => {
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;
  const deltaXSquare = Math.pow(deltaX, 2);
  const deltaYSquare = Math.pow(deltaY, 2);
  const distance = Math.sqrt(deltaXSquare + deltaYSquare);
  return distance;
};

export const initialiseNodeConnections = ({ gridNodes }: any) => {
  const gridNodesArr: any = Object.values(gridNodes);

  const connections: any = {};
  for (let nodeIndex = 0; nodeIndex < gridNodesArr.length; nodeIndex++) {
    const nodeA = gridNodesArr[nodeIndex];
    for (
      let nodeBIndex = nodeIndex + 1;
      nodeBIndex < gridNodesArr.length;
      nodeBIndex++
    ) {
      const nodeB = gridNodesArr[nodeBIndex];
      const connectionId = `${nodeA.id}-to-${nodeB.id}`;

      const sequence = nodeA.sequence.reduce(
        (
          connectionStepsAccumulating: any,
          currentNodeAStep: any,
          currentStepIndex: number
        ) => {
          const currentNodeBStep = nodeB.sequence[currentStepIndex];

          const x1 = currentNodeAStep.x;
          const y1 = currentNodeAStep.y;
          const x2 = currentNodeBStep.x;
          const y2 = currentNodeBStep.y;
          const connectingLine = {
            x1,
            y1,
            x2,
            y2,
            pathLength: calculatePathLength({ x1, y1, x2, y2 }),
            // previousPathLength: calculatePathLength({ x1, y1, x2, y2 }),
          };
          return [...connectionStepsAccumulating, connectingLine];
        },
        []
      );

      connections[connectionId] = { id: connectionId, sequence };
    }
  }

  return connections;
};
