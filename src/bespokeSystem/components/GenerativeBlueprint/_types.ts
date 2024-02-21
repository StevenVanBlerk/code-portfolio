type GridCell = {
  rowIndex: number;
  columnIndex: number;
};

export type Grid2D = { [key: string]: GridCell };

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
  grid2D: Grid2D;
  gridNodes: GridNode[];
  nodeConnections: NodeConnections;
  rowCount: number;
  columnCount: number;
};
