type GridCell = {
  rowIndex: number;
  columnIndex: number;
};

export type GridNodeStep = {
  x: number;
  y: number;
  initialDelay: number;
};

export type GridNodeSequence = GridNodeStep[];

export type NodeConnection = {
  id: string;
  sequenceA: GridNodeSequence;
  sequenceB: GridNodeSequence;
};

export type NodeConnections = {
  [key: string]: NodeConnection;
};

type GridNodeSequenceStep = {
  x: number;
  y: number;
  r: number;
  initialDelay: number;
};

export type GridNode = {
  id: string;
  sequence: GridNodeSequenceStep[];
};

export type Director = {
  gridNodes: GridNode[];
  nodeConnections: NodeConnections;
  rowCount: number;
  columnCount: number;
};
