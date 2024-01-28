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
  areNodesDisplayed: true,
  AreNodesSynchronised: false, // TO-DO: set initialDelay to 0 when true
  nodeMaxDisplacement: 3, //gaps
  nodeCount: 30,
  radiusMultiplier: 3, //TO-DO: rename to nodeRadiusMultiplier
  areConnectionPathsDisplayed: true,
  connectionMinLength: 1 * gridGapSize, // areNodesDisplayed=true---> //0.5 * gridGapSize,
  connectionMaxLength: 2 * gridGapSize,                               //3.5 * gridGapSize,
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
