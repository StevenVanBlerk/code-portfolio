import { Director } from "../../_types";
import { UseDirectorParams } from "./_types";
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
  nodeMaxDisplacement,
}: UseDirectorParams) => {
  const grid2D = initialiseGrid2D(columnCount, columnCount);
  const gridNodes = initialiseGridNodes({
    nodeCount,
    columnCount,
    rowCount,
    stepCount,
    nodeMaxDisplacement,
  });
  const nodeConnections = initialiseNodeConnections({ gridNodes });

  const director: Director = {
    grid2D,
    gridNodes,
    nodeConnections,
    rowCount,
    columnCount,
  };

  return director;
};

export default useDirector;
