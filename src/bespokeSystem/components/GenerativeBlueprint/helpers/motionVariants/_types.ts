type NodeGroupSequenceStep = { x: number; y: number; initialDelay: number };

export type animateNodeGroupProps = {
  sequence: NodeGroupSequenceStep[];
  gridGapSize: number;
  stepDuration: number;
};

type NodeRadiusSequenceStep = {
  r: number;
};
export type animateNodeRadiusProps = {
  sequence: NodeRadiusSequenceStep[];
  radiusMultiplier: number;
  stepDuration: number;
};

type NodeConnectionSequenceStep = {
  x: number;
  y: number;
  initialDelay: number;
};
export type animateNodeConnectionProps = {
  sequenceA: NodeConnectionSequenceStep[];
  sequenceB: NodeConnectionSequenceStep[];
  gridGapSize: number;
  stepDuration: number;
  opacity: number;
};
