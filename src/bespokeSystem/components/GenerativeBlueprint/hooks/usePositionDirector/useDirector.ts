import { Director } from "../../_types";
import { UseDirectorParams } from "./_types";
import { initialiseGridNodes, initialiseNodeConnections } from "./helpers";

const useDirector = ({
  columnCount,
  rowCount,
  nodeCount,
  stepCount,
  nodeMaxDisplacement,
}: UseDirectorParams) => {
  const gridNodes = initialiseGridNodes({
    nodeCount,
    columnCount,
    rowCount,
    stepCount,
    nodeMaxDisplacement,
  });
  const nodeConnections = initialiseNodeConnections({ gridNodes });

  const director: Director = {
    gridNodes,
    nodeConnections,
    rowCount,
    columnCount,
  };

  return director;
};

export default useDirector;
