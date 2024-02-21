import { ReactNode } from "react";

export type ContextData = {
  isBackgroundGridDisplayed: boolean;
  areNodesDisplayed: boolean;
  areConnectionPathsDisplayed: boolean;
  columnCount: number;
  rowCount: number;
  nodeCount: number;
  stepCount: number;
  nodeMaxDisplacement: number;
  AreNodesSynchronised: boolean; // TO-DO: set initialDelay to 0 when true
  stepDuration: number;
  gridGapSize: number; //px
  canvasHeight: number;
  canvasWidth: number;
  frameWidth: number;
  canvasMargin: number;
  radiusMultiplier: number;
  connectionMinLength: number;
  connectionMaxLength: number;
};

export type GlobalValuesContextProviderProps = {
  children: ReactNode;
};
