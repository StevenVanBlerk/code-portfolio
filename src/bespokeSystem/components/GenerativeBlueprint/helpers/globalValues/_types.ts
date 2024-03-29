import { ReactNode } from "react";

export type ContextData = {
  columnCount: number;
  rowCount: number;
  /** measured in px */
  gridGapSize: number; //px
  /** measured in px */
  canvasHeight: number;
  /** measured in px */
  canvasWidth: number;
  /** Extra space added around canvas in case nodes spill outside of canvas. Measured in px */
  canvasMargin: number;
  isBackgroundGridDisplayed: boolean;
  areNodesDisplayed: boolean;
  areConnectionPathsDisplayed: boolean;
  stepCount: number;
  /** maximum columns/rows a node can move per step */
  nodeMaxDisplacement: number;
  AreNodesSynchronised: boolean; // TO-DO: set initialDelay to 0 when true
  nodeCount: number;
  stepDuration: number;
  nodeRadiusMultiplier: number;
  connectionMinLength: number;
  connectionMaxLength: number;
  BackgroundGridColour: string;
  isPlaying: boolean;
};

export type ContextDataAndInitialisers = ContextData & {
  initialisePreset: (preset: ContextData) => void;
};

export type GlobalValuesContextProviderProps = {
  children: ReactNode;
};
