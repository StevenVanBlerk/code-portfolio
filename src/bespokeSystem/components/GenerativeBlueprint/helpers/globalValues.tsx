import React, { createContext, useContext, useState } from "react";

interface contextData {
  // initial values
  isBackgroundGridDisplayed: boolean;
  areNodesDisplayed: boolean;
  areConnectionPathsDisplayed: boolean;
  columnCount: number;
  rowCount: number;
  nodeCount: number;
  stepCount: number;
  nodeMaxDisplacement: number;
  AreNodesSynchronised: boolean; // TO-DO: set initialDelay to 0 when true
  stepDuration: number; //illustrator exclusive values
  gridGapSize: number; //px
  canvasHeight: number;
  canvasWidth: number;
  frameWidth: number;
  canvasMargin: number;
  radiusMultiplier: number;
  connectionMinLength: number;
  connectionMaxLength: number;
}

const rowCount = 10; //px
const columnCount = 19; //px
const gridGapSize = 60; //px

const initialValues: contextData = {
  isBackgroundGridDisplayed: false,
  areNodesDisplayed: false,
  areConnectionPathsDisplayed: true,
  columnCount,
  rowCount,
  nodeCount: 30,
  stepCount: 10,
  nodeMaxDisplacement: 3, //gaps
  AreNodesSynchronised: false, // TO-DO: set initialDelay to 0 when true
  stepDuration: 3,
  gridGapSize,
  canvasHeight: rowCount * gridGapSize,
  canvasWidth: columnCount * gridGapSize,
  frameWidth: 0, //px
  canvasMargin: 25, //px
  radiusMultiplier: 5,
  connectionMinLength: 0.5 * gridGapSize,
  connectionMaxLength: 3.5 * gridGapSize,
};

export const GlobalValuesContext = createContext<contextData | undefined>(
  initialValues
);

export const GlobalValuesContextProvider: any = ({ children }: any) => {
  return (
    <GlobalValuesContext.Provider value={initialValues}>
      {children}
    </GlobalValuesContext.Provider>
  );
};
