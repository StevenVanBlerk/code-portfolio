import React, { ReactNode, createContext } from "react";
import { ContextData } from "./_types";

const rowCount = 10; //px
const columnCount = 19; //px
const gridGapSize = 60; //px

// TO-DO: Add controls for these values and presets to quickly switch

const initialValues: ContextData = {
  canvasHeight: rowCount * gridGapSize,
  canvasWidth: columnCount * gridGapSize,
  canvasMargin: 25, //px
  frameWidth: 0, //px
  stepDuration: 3,
  stepCount: 10,
  isBackgroundGridDisplayed: false,
  columnCount,
  rowCount,
  gridGapSize,
  areNodesDisplayed: false,
  AreNodesSynchronised: false, // TO-DO: set initialDelay to 0 when true
  nodeMaxDisplacement: 3, //gaps
  nodeCount: 30,
  radiusMultiplier: 3, //TO-DO: rename to nodeRadiusMultiplier
  areConnectionPathsDisplayed: true,
  connectionMinLength: 0.5 * gridGapSize,
  connectionMaxLength: 3.5 * gridGapSize,
};

export const GlobalValuesContext = createContext<ContextData>(initialValues);

export const GlobalValuesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <GlobalValuesContext.Provider value={initialValues}>
      {children}
    </GlobalValuesContext.Provider>
  );
};
