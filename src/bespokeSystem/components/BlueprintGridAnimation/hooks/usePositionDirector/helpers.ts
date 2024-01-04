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
          const connectingLine = {
            x1: currentNodeAStep.x,
            y1: currentNodeAStep.y,
            x2: currentNodeBStep.x,
            y2: currentNodeBStep.y,
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
