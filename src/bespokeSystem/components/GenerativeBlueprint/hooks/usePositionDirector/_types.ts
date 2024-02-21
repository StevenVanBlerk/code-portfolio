import { GridNode, GridNodeSequence } from "../../_types";

export type InitialiseGridNodesParams = {
  rowCount: number;
  columnCount: number;
  nodeCount: number;
  stepCount: number;
  nodeMaxDisplacement: number;
};

export type InitialiseNodeConnectionsParams = { gridNodes: GridNode[] };

type Connection = {
  id: string;
  sequenceA: GridNodeSequence;
  sequenceB: GridNodeSequence;
};

export type Connections = {
  [key: string]: Connection;
};

export type UseDirectorParams = {
  columnCount: number;
  rowCount: number;
  nodeCount: number;
  stepCount: number;
  nodeMaxDisplacement: number;
};
