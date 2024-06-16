import { NodeConnections } from "../../_types";
import { GridNodeSequence } from "../../_types";

export type NormalisedOpacityParams = {
  connectionLength: number;
  connectionMinLength: number;
  connectionMaxLength: number;
};

export type PathProps = {
  line: { sequenceA: GridNodeSequence; sequenceB: GridNodeSequence };
};

export type LineCoordinates = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

export type ConnectionPathsProps = { nodeConnections: NodeConnections };
