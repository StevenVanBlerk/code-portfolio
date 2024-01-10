import {
  initialiseGrid2D,
  initialiseGridNodes,
  initialiseNodeConnections,
} from "./helpers";

const useDirector = ({
  columnCount,
  rowCount,
  nodeCount,
  stepCount,
}: any): any => {
  const grid2D = initialiseGrid2D(columnCount, columnCount);
  const gridNodes = initialiseGridNodes({
    nodeCount,
    columnCount,
    rowCount,
    stepCount,
  });
  const nodeConnections = initialiseNodeConnections({ gridNodes });

  const director = {
    grid2D,
    gridNodes,
    nodeConnections,
    rowCount,
    columnCount,
  };

  return director;
};

export default useDirector;