import { ReactNode } from "react";

export type CustomisableValues = {
  isBackgroundGridDisplayed: boolean;
  areNodesDisplayed: boolean;
  areConnectionPathsDisplayed: boolean;
  stepCount: number;
  /** maximum columns/rows a node can move per step */
  nodeMaxDisplacement: number;
  AreNodesSynchronised: boolean; // TO-DO: set initialDelay to 0 when true
  nodeCount: number;
  stepDuration: number;
  radiusMultiplier: number;
  connectionMinLength: number;
  connectionMaxLength: number;
};

export type ContextData = CustomisableValues & {
  columnCount: number;
  rowCount: number;
  /** measured in px */
  gridGapSize: number; //px
  /** measured in px */
  canvasHeight: number;
  /** measured in px */
  canvasWidth: number;
  /** measured in px */
  frameWidth: number;
  /** measured in px */
  canvasMargin: number;
};

export type GlobalValuesContextProviderProps = {
  children: ReactNode;
};
