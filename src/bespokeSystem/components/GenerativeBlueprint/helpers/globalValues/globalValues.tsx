import React, { createContext } from "react";
import {
  ContextData,
  GlobalValuesContextProviderProps,
  CustomisableValues,
} from "./_types";

const rowCount = 10;
const columnCount = 20;
const gridGapSize = 60;
// settings for debugging nodes/lines delay bugs
// const rowCount = 5; //10;
// const columnCount = 10; //20;
// const gridGapSize = 120; //60;

const allElementsDisplayedPreset: CustomisableValues = {
  isBackgroundGridDisplayed: true,
  areNodesDisplayed: true,
  areConnectionPathsDisplayed: true,
  AreNodesSynchronised: false,
  stepCount: 10,
  stepDuration: 3,
  nodeCount: 20,
  nodeMaxDisplacement: 3,
  radiusMultiplier: 3,
  connectionMinLength: 0.5 * gridGapSize,
  connectionMaxLength: 2.5 * gridGapSize,
};

const noNodesDisplayedPreset: CustomisableValues = {
  isBackgroundGridDisplayed: true,
  areNodesDisplayed: false,
  areConnectionPathsDisplayed: true,
  AreNodesSynchronised: false,
  stepCount: 10,
  stepDuration: 3,
  nodeCount: 30,
  nodeMaxDisplacement: 3,
  radiusMultiplier: 3,
  connectionMinLength: 0 * gridGapSize,
  connectionMaxLength: 3.5 * gridGapSize,
};

const initialValues: ContextData = {
  canvasHeight: rowCount * gridGapSize,
  canvasWidth: columnCount * gridGapSize,
  canvasMargin: 25,
  frameWidth: 0,
  columnCount,
  rowCount,
  gridGapSize,
  // ...noNodesDisplayedPreset,
  ...allElementsDisplayedPreset,
};

export const GlobalValuesContext = createContext<ContextData>(initialValues);

export const GlobalValuesContextProvider = ({
  children,
}: GlobalValuesContextProviderProps) => {
  return (
    <GlobalValuesContext.Provider value={initialValues}>
      {children}
    </GlobalValuesContext.Provider>
  );
};
