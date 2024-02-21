import { GridNodeSequence } from "../../_types";

type NodeGroupSequenceStep = { x: number; y: number; initialDelay: number };

export type animateNodeGroupParams = {
  sequence: NodeGroupSequenceStep[];
  gridGapSize: number;
  stepDuration: number;
};

type NodeRadiusSequenceStep = {
  r: number;
};
export type animateNodeRadiusParams = {
  sequence: NodeRadiusSequenceStep[];
  radiusMultiplier: number;
  stepDuration: number;
};

export type animateNodeConnectionParams = {
  sequenceA: GridNodeSequence;
  sequenceB: GridNodeSequence;
  gridGapSize: number;
  stepDuration: number;
  opacity: number;
};
